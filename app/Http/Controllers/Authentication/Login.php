<?php

namespace App\Http\Controllers\Authentication;

use Sihq\Facades\Controller;
// Illuminate
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Password;

// Models
use App\Models\User;


class Login extends Controller
{

    public $email;
    public $password;
    public $remember = false;

    public $rules = [
        'email' => 'required',
        'password' => 'required'
    ];


    public function save(){
        $this->validate();
        if (RateLimiter::tooManyAttempts(Str::lower($this->email) . "|" . request()->ip(), 5)) {
            event(new Lockout(request()));
            $seconds = RateLimiter::availableIn(Str::lower($this->email) . "|" . request()->ip());
            throw ValidationException::withMessages([
                "email" => trans("auth.throttle", [
                    "seconds" => $seconds,
                    "minutes" => ceil($seconds / 60),
                ]),
            ]);
        }

        if (!Auth::attempt(["email" => $this->email, "password" => $this->password], $this->remember)) {
            RateLimiter::hit(Str::lower($this->email) . "|" . request()->ip());
            throw ValidationException::withMessages([
                "email" => __("auth.failed"),
            ]);
        }
        RateLimiter::clear(Str::lower($this->email) . "|" . request()->ip());
        request()->session()->regenerate();

        $this->redirect('/');

    }
       
}