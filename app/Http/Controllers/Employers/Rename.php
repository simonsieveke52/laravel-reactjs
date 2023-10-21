<?php

namespace App\Http\Controllers\Employers;


use App\Models\Employer;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Rename extends Controller
{
    use Authenticated;

    public Employer $employer;

    public $rules = [
        'employer.name' => 'required'
    ];

    public function onMount(){
        $this->employer = Employer::findOrFail(optional($this->props())->employerId);
        $this->authorise('update',$this->employer);
    }

    public function save(){  
        $this->validate();

   
        $this->employer->save();

     
        $this->redirect('/employers');
    }
       
}