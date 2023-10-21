<?php

namespace App\Http\Controllers\CheckIn;

use App\Models\Check;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Index extends Controller
{
    use Authenticated;
    public Check $check;
    public $checks;
    public $score;

    public $rules = [
        'list_radio'=> 'required'
    ];
    
    public function onMount(){
        $this->check = new Check();
        $this->checks = Check::all();
    }

    public function save(){
        $this->validate();
        $this->check->check_in = json_encode($this->list_radio);
        $this->check->save();
        $this->score = array_sum($this->list_radio);
        $this->redirect('/check-in/submit');
    }
}