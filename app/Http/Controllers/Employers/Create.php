<?php

namespace App\Http\Controllers\Employers;


use App\Models\Employer;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
use Carbon\Carbon;
class Create extends Controller
{
    use Authenticated;
    public Employer $employer;

    public $rules = [
        'employer.name' => 'required'
    ];

    public function onMount(){
        $this->authorise('create',Employer::class);
        $this->employer = new Employer();
    }

    public function test(){}

    public function save(){  
    
        $this->validate();
     
        $this->employer->save();
   
        $this->redirect('/employers');
    }
       
}