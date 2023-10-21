<?php

namespace App\Http\Controllers\Authentication;


use App\Models\Location;
use App\Models\Employer;
use App\Models\User;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;

class Register extends Controller
{
    public User $user;

    public Location $location;
    public Employer $employer;

    public $rules = [
        'user.first_name' => 'required',
        'user.last_name' => 'required',
        'user.email' => 'required|email|unique:users,email',
        'user.password' => 'required',
        // 'terms_of_service' => 'required'
        // 'user.phone' => 'required|phone',
        // 'user.address' => 'required|address'
    ];

    public function onMount(){
        $this->user = new User();
        $this->location = Location::findOrFail(optional($this->props())->locationId);
        $this->employer = optional($this->location)->employers->first();
    }

    public function save(){
        $this->validate();
        $this->user->password = Hash::make($this->user->password);
        $this->user->role = 'user';
        $this->user->save();
        $this->user->employers()->sync(optional($this->employer)->id);
        $this->user->locations()->sync(optional($this->location)->id);
        auth()->login($this->user);
        $this->redirect('/');
    }
       
}