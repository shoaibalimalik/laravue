<?php

//


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware('api')->group(function () {
//     Route::resource('students', StudentController::class);
// });

//Route::post('logout' , [AuthController::class , 'logout'])->middleware('auth:sanctum');


// Route::post('register', 'AuthController@register');
// Route::post('login', 'AuthController@login');
// Route::post('logout', 'AuthController@logout')->middleware('auth:sanctum');

//Route::resource('students', StudentController::class);


use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('register' , [AuthController::class , 'register']);
Route::post('login' , [AuthController::class , 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::resource('students', StudentController::class);
    Route::post('logout' , [AuthController::class , 'logout']);
});


