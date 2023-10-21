<?php

namespace App\Http\Controllers\Authentication;

use App\Models\User;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;

// Notifications
use App\Notifications\Users\Authentication\PasswordResetNotification;


class Forgot extends Controller
{

    public $email;
    public $complete = false;

    public $rules = [
        'email' => 'required|email'
    ];

    public function save(){
        $this->validate();

        if ($user = User::where(["email" => $this->email])->first()) {
            $expires = now()
                ->add(24, "hours")
                ->toISOString();
            $payload = [
                "token" => Hash::make(md5($expires . optional($user)->id . optional($user)->email . optional($user)->password)),
                "expires" => $expires,
                "identity" => optional($user)->id,
            ];
            $user->notify(new PasswordResetNotification(base64_encode(json_encode($payload))));
        }
        $this->complete = true;

    }
       
}