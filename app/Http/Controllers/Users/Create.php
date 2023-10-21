<?php

namespace App\Http\Controllers\Users;


use App\Models\User;
use App\Models\Employer;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Create extends Controller
{
    use Authenticated;

    public User $user;
    
    public $location;

    public $rules = [
        'user.first_name' => 'required',
        'user.last_name' => 'required',
        'user.email' => 'required|email|unique:users,email',
        'user.password' => 'required',
        // 'user.phone' => 'required|phone',
        // 'user.address' => 'required|address'
    ];

    public function onMount(){
        $this->authorise('create',User::class);
        
        $this->user = new User();
        $this->employer = Employer::find(session()->get('employer')) ?? null;
        $this->locations =  optional($this->employer)->locations;

        $this->location = optional(optional($this->locations)->first())->id;
        
        $this->user->phone = ['country'=>'AI'];
    }


    public function save(){  
        $this->validate();
        $this->user->password = Hash::make($this->user->password);
     
        $this->user->save();
        $this->user->employers()->sync(session()->get('employer'));
        if($this->location){
            $this->user->locations()->sync($this->location);
        }
        $this->redirect('/users');
    }
       
}