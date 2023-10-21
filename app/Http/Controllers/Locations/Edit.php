<?php

namespace App\Http\Controllers\Locations;


use App\Models\Location;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Edit extends Controller
{
    use Authenticated;

    public Location $location;

    public $rules = [
        'location.name' => 'required'
    ];

    public function onMount(){
        $this->location = Location::findOrFail(optional($this->props())->locationId);
        $this->authorise('update',$this->location);
    }

    public function save(){  
        $this->validate();
        $this->location->save();
        $this->redirect('/locations');
    }
       
}