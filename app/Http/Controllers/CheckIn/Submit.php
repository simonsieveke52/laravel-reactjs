<?php

namespace App\Http\Controllers\CheckIn;


use App\Models\Check;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
use Carbon\Carbon;
class Submit extends Controller
{
    use Authenticated;
    public $check;
    public $score;

    public $rules = [
        'employer.name' => 'required'
    ];

    public function onMount(){
        $this->check = Check::latest()->first();
        $this->user = auth()->user();
        $this->score = json_decode($this->check->check_in);
    }

    public function test(){}
}