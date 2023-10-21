<?php

namespace App\Http\Controllers\Locations;


use App\Models\Location;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Share extends Controller
{
    use Authenticated;

    public Location $location;

    public function onMount(){
        $this->location = Location::findOrFail(optional($this->props())->locationId);
        $this->authorise('share',$this->location);
    }

       
}