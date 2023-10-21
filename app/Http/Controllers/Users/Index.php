<?php

namespace App\Http\Controllers\Users;


use App\Models\User;
use App\Models\Employer;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;

use Illuminate\Support\Facades\Gate;
 

class Index extends Controller
{
    use Authenticated;

    public $users;
    public $employer;

    public function onMount(){
        $this->authorise('viewAny',User::class);
    }

    public function onDispatch(){
        $this->employer = session()->get('employer');
        $this->users = Employer::find(   $this->employer )->users ?? collect([]);
        $this->users = $this->users->map(function($user){
            return array_merge($user->toArray(),[
                'employer' => optional($user->employers)->first(),
                'location' => optional($user->locations)->first()
            ]);
        });
    }
   
}