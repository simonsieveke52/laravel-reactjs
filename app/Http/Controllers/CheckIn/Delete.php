<?php

namespace App\Http\Controllers\CheckIn;


use App\Models\Check;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Delete extends Controller
{
    use Authenticated;

    public Check $check;

    public function onMount(){
        $this->check = Check::findOrFail(optional($this->props())->checkId);
    }


    public function save(){  
        $this->check->delete();
        $this->redirect('/check-in');
    }
       
}