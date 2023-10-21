<?php

namespace App\Http\Controllers\CheckIn;


use App\Models\Check;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class View extends Controller
{
    use Authenticated;

    public $check;

    public function onMount(){
        $this->check = Check::findOrFail(optional($this->props())->checkId);
    }
}