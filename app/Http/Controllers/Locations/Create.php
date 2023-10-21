<?php

namespace App\Http\Controllers\Locations;


use App\Models\Location;
use App\Models\Employer;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Create extends Controller
{
    use Authenticated;

    public Location $location;
    public $employer_id = null;
    public $employers = [];

    public $rules = [
        'location.name' => 'required'
    ];

    public function onMount(){
        $this->authorise('create',Location::class);
        $this->location = new Location();
        $this->employer = Employer::find(session()->get('employer')) ?? null;
        $this->employers = Employer::all();
    }


    public function save(){  
        $this->validate();
        $this->location->save();

        $employer = session()->get('employer');
       
        $this->location->employers()->sync($employer);
        $this->location->save();
        $this->redirect('/locations');
    }
       
}