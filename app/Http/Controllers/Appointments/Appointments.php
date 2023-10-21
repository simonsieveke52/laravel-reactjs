<?php

namespace App\Http\Controllers\Appointments;


use App\Models\Content;
use App\Models\Employer;
use App\Models\Location;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
use Illuminate\Support\Facades\Http;
 
class Appointments extends Controller
{

    use Authenticated;
    public $appointments;
    public ?Employer $employer;
    public ?Location $location;

    public function onMount(){
        $this->user = auth()->user();
        $response = Http::get('https://foremind.sihq.com.au/api/3.0/appointments/get-appointments-by-email/'.$this->user->email);
        $this->appointments = $response->json();
        $this->employer = optional(optional($this->user)->employers)->first();
        $this->location = optional(optional($this->user)->locations)->first();
    }

       
}