<?php
Route::group(['middleware' => ['web']], function () {
    Route::group(['namespace' => 'App\Modules\Hotelbook\Controllers'], function () {
        Route::any('/', 'UserController@index');
        Route::any('/search', 'UserController@search');
        Route::post('/registerpost', 'UserController@registerpost');
        Route::post('/loginpost', 'UserController@loginpost');
    });
});
