<?php
Route::group(['middleware' => ['web']], function () {
    Route::group(['namespace' => 'App\Modules\Moviebook\Controllers'], function () {
        Route::any('/', 'IndexController@index');
        Route::any('/check', 'IndexController@checkcity');
        Route::any('/searchcity', 'IndexController@searchcity');
    });
});
