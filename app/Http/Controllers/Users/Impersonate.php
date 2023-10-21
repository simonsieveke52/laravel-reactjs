<?php

namespace App\Http\Controllers\Users;


use App\Models\User;
use App\Models\Employer;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Impersonate extends Controller
{
    use Authenticated;

    public User $user;
    
    public function onMount(){
        $this->user = User::find($this->props()->userId);
        $this->authorise('impersonate',$this->user);
    }

    public function save(){  
        auth()->login($this->user);
        $this->redirect('/');
    }
       
}