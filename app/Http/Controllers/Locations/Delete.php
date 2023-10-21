<?php

namespace App\Http\Controllers\Locations;


use App\Models\Location;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Delete extends Controller
{
    use Authenticated;

    public Location $location;

    public function onMount(){
        $this->location = Location::findOrFail(optional($this->props())->locationId);
        $this->authorise('delete',$this->location);
    }


    public function save(){  
        $this->location->delete();
        $this->redirect('/locations');
    }
       
}