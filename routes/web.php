<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{module}/{type}/{file}', [ function ($module, $type, $file) {
   $module = ucfirst($module);
   $file = str_replace("|", "/", $file);
   $path = app_path("Modules/$module/Assets/$type/$file");
   if (\File::exists($path)) {
//        return response()->download($path, "$file");
       if($type == 'js'){
           return response()->file($path, array('Content-Type' => 'application/javascript'));
       }elseif($type == 'css'){
           return response()->file($path, array('Content-Type' => 'text/css'));
       }else{
           return response()->file($path, array('Content-Type' => 'image/svg'));
       }
   }
   return response()->json([], 404);
}]);