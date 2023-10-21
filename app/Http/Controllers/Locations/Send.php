<?php

namespace App\Http\Controllers\Locations;

// Illuminate
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;

// Models
use App\Models\Employer;
use App\Models\User;
use App\Models\Location;

// Notifications
use App\Notifications\Invite\InviteNotification;


class Send extends Controller
{
    use Authenticated;

    public $email;
    public Location $location;
    public ?User $user;

    public $rules = [
        'email' => 'required'
    ];

    public function onMount(){
        $this->location = Location::findOrFail(optional($this->props())->locationId);
        $this->authorise('send',$this->location);
        $this->user = auth()->user();
    }

    public function save(){  
        $this->validate();
        $employer = $this->employer = Employer::find(   session()->get('employer') )->name ?? null;
        $email = $this->email;
        $admin_name = $this->user->first_name .' '. $this->user->last_name;
        
        $data = (object) [
            'admin_name'=>$admin_name,
            'email'=>$email,
            'employer'=>$employer,
            'location_id'=>$this->location->id,
            'location_name'=>$this->location->name,
        ];

        Notification::route('mail', $email)->notify(new InviteNotification($data));
        $this->redirect('/locations');
    }
       
}