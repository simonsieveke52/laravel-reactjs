<?php

namespace App\Http\Controllers\Users;


use App\Models\User;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Delete extends Controller
{
    use Authenticated;

    public User $user;

    public function onMount(){
        $this->user = User::findOrFail(optional($this->props())->userId);
        $this->authorise('delete',$this->user);
    }

    public function save(){  
        $this->user->delete();
        $this->redirect('/users');
    }
       
}