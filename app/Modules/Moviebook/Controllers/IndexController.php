<?php

namespace App\Modules\Moviebook\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use Redirect;
use DB;
use View;
use Log;

class IndexController extends Controller {

    public function index(Request $request) {
        return View::make('Moviebook::searchcity');
    }

    public function checkcity(Request $request) {
        $postData = $request->all();
        $result = DB::table('city')->where(['cname' => $postData['user']])->first();
       

        if ($result != null) {
            $result1 = DB::table('cinemas')->where(['cid' => $result->cid])->get();

            foreach ($result1 as $rowArray) {
                echo '<div><h3><a href="http://example.com/">' . $rowArray->cinema_name . " " . $rowArray->place . '</a></h3></div>';
            }
            die();
        }
        if ($result == null) {           
            echo '<p>Given serach city not Available</p>';
            die();
        }
    }

    public function searchcity(Request $request) {
//        echo "hi";
        exit;
        try {
            return View::make('Bbcasia::login');
        } catch (Exception $e) {
            echo '<pre>';
            Log::critical($e->getMessage());
            print_r($e->getMessage());
            exit;
        }
    }

}
