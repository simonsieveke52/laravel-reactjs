<?php

namespace App\Http\Controllers\Employers;

use App\Models\Employer;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Index extends Controller
{
    use Authenticated;
    public $employers;

    public function onMount(){
        $this->authorise('viewAny',Employer::class);
    }

    public function onDispatch(){
        $this->employers = Employer::all();
        $this->employers = $this->employers->map(function($employer){
            return array_merge($employer->toArray(),[
                'users' => optional($employer->users)->count(),
                'locations' => optional($employer->locations)->count()
            ]);
        });
    }
}