<?php

namespace App\Http\Controllers\Home;


use App\Models\Content;
use App\Models\Employer;
use App\Models\Location;
use App\Models\Check;

use Illuminate\Support\Facades\Hash;

use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
use Illuminate\Support\Facades\Http;

class Home extends Controller
{
    use Authenticated;

    public $catalog;
    public ?Employer $employer;
    public ?Location $location;
    public $check;

    public function onMount(){
        $this->user = auth()->user();
        $response = Http::get('https://foremind.sihq.com.au/api/3.0/appointments/get-appointments-by-email/'.$this->user->email);
        $this->appointments = $response->json();
        $this->catalog = Content::where('pinned_position','!=',null)->orderBy('pinned_position')->get();
        $this->employer = optional(optional($this->user)->employers)->first();
        $this->location = optional(optional($this->user)->locations)->first();
        $this->check = Check::latest()->first();
    }

       
}