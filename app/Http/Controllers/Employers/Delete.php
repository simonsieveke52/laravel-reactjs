<?php

namespace App\Http\Controllers\Employers;


use App\Models\Employer;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Delete extends Controller
{
    use Authenticated;
    public Employer $employer;

    public function onMount(){
        $this->employer = Employer::findOrFail(optional($this->props())->employerId);
        $this->authorise('delete',$this->employer);
    }


    public function save(){  
        $this->employer->delete();
        $this->redirect('/employers');
    }
       
}