<?php

namespace App\Http\Controllers\Users;

// Illuminate
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Sihq\Facades\Controller;

// Models
use App\Models\User;
use App\Models\Location;
use App\Models\Employer;

// Notifications
use App\Notifications\Support\SupportRequestNotification;

class Profile extends Controller
{
    public ?User $user;
    public ?Employer $employer;
    public ?Location $location;
    public $location_id;
    public $locations = [];
 
    public $password;

    public $rules = [
        'user.first_name' => 'required',
        'user.last_name' => 'required',
        'user.email' => 'required|email',
        'user.address' => 'required',
        'user.phone' => 'required',
    ];

    public function onMount(){
        $this->user = User::find(optional(auth()->user())->id);
        $this->authorise('update',$this->user);
    }

    public function onDispatch(){
        $this->employer = optional(optional($this->user)->employers)->first();
        $this->location = optional(optional($this->user)->locations)->first();
        $this->location_id = optional($this->location)->id;
        $this->locations =  optional($this->employer)->locations;
    }

 

    public function update_name(){
        $this->rules = [
            'user.first_name' => 'required',
            'user.last_name' => 'required',
            // 'user.phone' => 'required',
            // 'user.address' => 'required'
        ];
        $this->validate();
        $this->user->save();
        $this->onMount();
    }

    public function update_email(){
        $this->rules = [
            'user.email' => 'email|required'
        ];
        $this->validate();
        $this->user->save();
        $this->onMount();
    }

    public function update_password(){
        $this->rules = [
            'password_current' => 'required',
            'password_new' => 'required|confirmed'
        ];
        $this->validate();

        if($this->password){
            $this->user->password = Hash::make($this->password);
        }
        $this->user->save();
        $this->onMount();
    }


    public function update_location(){
        if($this->location_id){
            $this->user->locations()->sync($this->location_id);
        }
        $this->user->save();
        $this->onMount();
    }


}