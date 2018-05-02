<?php

namespace App\Modules\Hotelbook\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Modules\Hotelbook\Models\Hotelbook;
use Redirect;
use DB;
use View;
use Log;

class UserController extends Controller {

    public function index(Request $request) {

        return View::make('Hotelbook::searchhotels');
    }

    public function search(Request $request) {
        $postData = $request->all();

        $result = DB::table('hotels')->where('hotel_name', '=', $postData['user'])->orWhere('city', '=', $postData['user'])->get();
//        if (!empty($result)) {
//            echo "hi";exit;
//            echo '<p>Given serach city not Available</p>';
//            die();
//        }

        if ($result != null) {
            foreach ($result as $rowArray) {
                echo '<div><h3>' . $rowArray->hotel_name . " " . $rowArray->address . " " . $rowArray->phone_number . '</h3></div>';
            }
            die();
        }
    }

}
