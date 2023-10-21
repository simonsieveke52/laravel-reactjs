<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Models\Employer;
use App\Models\Location;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;

class Main extends Controller
{

    use Authenticated;

    public $current;
    public $current_employer;

    public $user;
    public $location;
    public $employer;

    public $employers;
    public $locations;

    public function onMount(){
        $this->set();
    }

    public function onDispatch(){
        $this->set();
        session()->put('employer',$this->current);
        $this->current_employer = Employer::find($this->current);
        $this->current = session()->get('employer') ?? optional($this->employer)->id;
       
    }

    public function set(){
        $this->user = User::find(optional(auth()->user())->id);
        $this->location = optional(optional($this->user)->locations)->first();
        $this->employer = optional(optional($this->user)->employers)->first();
        $this->employers = Employer::all();

     
      
    }

}