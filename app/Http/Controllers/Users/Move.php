<?php

namespace App\Http\Controllers\Users;


use App\Models\User;
use App\Models\Employer;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Move extends Controller
{
    use Authenticated;

    public User $user;

    public $rules = [
        'employer_id' => 'required',
        'location_id' => 'required',
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
        $this->employers = Employer::all();
        $this->employessfefe = $this->employers->map(function($employer){
            return array_merge($employer->toArray(),[
                'locations' => optional($employer->locations)->all(),
            ]);
        });
        
        $this->employer_id =  optional($this->employer)->id;
    }

    public function save(){  
        $this->validate();
        if($this->location_id){
            $this->user->locations()->sync($this->location_id);
        }
        if($this->employer_id){
            $this->user->employers()->sync($this->employer_id);
        }
        $this->redirect('/users');
    }
       
}