<?php

namespace App\Http\Controllers\Locations;


use App\Models\Location;
use App\Models\Employer;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Index extends Controller
{
    use Authenticated;

    public $locations;
    public ?Employer $employer;

    public function onMount(){
        $this->authorise('viewAny',Location::class);
    }

    public function onDispatch(){


        $employer = session()->get('employer');
        if(    $employer ){
            $this->employer = Employer::find($employer);
            $this->locations = $this->employer->locations ?? [];
            $this->locations = $this->locations->map(function($location){
                return array_merge($location->toArray(),[
                    'employer' => optional($location->employers)->first(),
                    'users' => optional($location->users)->count()
                ]);
            });
        }else{
            $this->locations = [];
        }

    

    }
   
}