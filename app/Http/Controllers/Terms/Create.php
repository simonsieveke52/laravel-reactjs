<?php

namespace App\Http\Controllers\Terms;

// Illuminate
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Sihq\Facades\Controller;

class Create extends Controller
{
    public function onMount(){
        $this->user = auth()->user();
    }
}