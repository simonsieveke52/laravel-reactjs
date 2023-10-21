<?php

namespace App\Http\Controllers\Users;


use App\Models\User;
use App\Models\Employer;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Edit extends Controller
{
    use Authenticated;

    public User $user;

    public $rules = [
        'user.first_name' => 'required',
        'user.last_name' => 'required',
    ];

    public function onMount(){
        $this->user = User::findOrFail(optional($this->props())->userId);
        $this->authorise('update',$this->user);
    }

    public function onDispatch(){
        $this->employer = optional(optional($this->user)->employers)->first();
        $this->location = optional(optional($this->user)->locations)->first();
        $this->location_id = optional($this->location)->id;
        $this->locations =  optional($this->employer)->locations;
    }

    public function save(){  
        $this->validate();
        $this->user->save();
        if($this->location_id){
            $this->user->locations()->sync($this->location_id);
        }
        $this->redirect('/users');
    }
       
}