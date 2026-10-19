<?php

use App\Http\Controllers\EmailController;
use Illuminate\Support\Facades\Route;

Route::post('/email', [EmailController::class, 'send'])
    ->middleware('throttle:5,1')
    ->name('contact.send');
