<?php

namespace App\Modules\Dkids\Models;

use Illuminate\Database\Eloquent\Model;
//use GuzzleHttp\Client as GuzzleHttpClient;
//use GuzzleHttp\Exception\RequestException;
//use Session;
//use Log;
//use Utils;
//use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client as GuzzleHttpClient;

class Dkids extends Model {

    private $timeOut;
    private $apiUrl;

    public function __construct() {
        $this->apiUrl = "https://rest-stag.evergent.com/dkids/"; // get this from env configs
        $this->timeOut = 15; // Timeout if the client fails to connect to the server in 5 seconds
    }

//    $client = new Client(); 
    public function execute($method, $apiName, $apiParams) {
        $client = new \GuzzleHttp\Client(); 
        $result = $client->request($method, $this->apiUrl . $apiName, [
            'headers' => ['content-type' => 'application/json', 'Accept' => 'application/json'],
            'body' => json_encode($apiParams),
            'connect_timeout' => $this->timeOut
        ]);
        return $result;
    }

    public function authhenticateCustomer($params) {
        $reqParams = array_merge($this->getAuthParams(), $params);
        $requestParams['AuthenticateCustomerReqMessage'] = $reqParams;
        return $this->execute('post', 'authenticateCustomer', $requestParams);
    }
    public function getAllContactsForUser($params) {
        $reqParams = array_merge($this->getAuthParams(), $params);
        $requestParams['GetContactRequestMessage'] = $reqParams;
        return $this->execute('post', 'getContact', $requestParams);
    }
    public function registerUser($params) {
        
        $reqParams = array_merge($this->getAuthParams(), $params);
        
        $requestParams['CreateUserReqMessage'] = $reqParams;
        //echo "<pre>";print_r($requestParams);
        return $this->execute('post', 'createUser', $requestParams);
    }

    private function getAuthParams() {
        //$userData['apiUser'] = env('API_CHANNELPARTNERID', env('API_CHANNELPARTNERID'));
        //$userData['apiPassword'] = env('API_PASSWORD', env('API_PASSWORD'));
        $userData['channelPartnerID'] = env('API_CHANNELPARTNERID', 'DKIDSPHILIPPINES');
        $userData['dmaId'] = env('dmaId', '001');
        return $userData;
    }

}
