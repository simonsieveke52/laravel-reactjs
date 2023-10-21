<?php

namespace App\Http\Controllers\Support;

// Illuminate
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Sihq\Facades\Controller;

// Models
use App\Models\User;
use App\Models\Employer;

// Notifications
use App\Notifications\Support\SupportRequestNotification;

class Create extends Controller
{

    public ?User $user;

    public $message = '';

    public $rules = [
        'user.first_name' => 'required',
        'user.last_name' => 'required',
        'user.email' => 'required|email',
        'message'=> 'required'
    ];

    public function onMount(){
        $this->user = auth()->user();
    }

    public function send(){  
        $this->validate();
        $name = $this->user->first_name .' '. $this->user->last_name;
        $from_email = $this->user->email;
        $message = $this->message;

        $data = (object) [
            'first_name'=>$this->user->first_name,
            'last_name'=>$this->user->last_name,
            'email'=>$this->user->email,
            'message'=>$this->message
        ];

        Notification::route('mail', 'support@foremind.com.au')->notify(new SupportRequestNotification($data));
        
        $this->redirect('/');
    }
}