<?php

namespace App\Http\Controllers\Authentication;

use App\Models\User;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Illuminate\Support\Carbon;

class Recover extends Controller
{

    public ?User $user;
    public $password;
    public $password_confirmation;

    public $valid = null;

    public $rules = [
        'password' => 'required|confirmed'
    ];

    public function onMount(){
        $this->valid = true;
        $payload = json_decode(base64_decode(optional($this->props())->token));
        $this->user = User::find(optional($payload)->identity);
        $this->expires = new Carbon(optional($payload)->expires);
        if (Hash::check(md5(optional($payload)->expires . optional($this->user)->id . optional($this->user)->email . optional($this->user)->password), optional($payload)->token) === false) {
            $this->user = null;
            $this->expires = null;
        }
        if(!$this->user || $this->expires->isBefore(now())){
            $this->valid = false;
        }
    }

    public function save(){
        $this->validate();
   
        $this->user->password = Hash::make($this->password);
        $this->user->save();
        auth()->login($this->user);
        $this->redirect('/');
    }
       
}