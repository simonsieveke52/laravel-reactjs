<?php

namespace App\Http\Controllers\Authentication;

use Sihq\Facades\Controller;

class Logout extends Controller{

    public function onMount(){
       auth()->logout();
       request()->session()->flush();
    }
       
}