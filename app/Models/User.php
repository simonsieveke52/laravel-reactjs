<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use Sihq\Casts\PhoneCast;
use Sihq\Casts\AddressCast;


use Sihq\Bootstrap\Traits\UuidTrait;


// Models
use App\Models\Employer;
use App\Models\Location;

// Pivots
use App\Models\Pivots\EmployerUser;
use App\Models\Pivots\LocationUser;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, UuidTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'address',
        'password',
        'role'
    ];

    protected $casts = [
        'phone' => PhoneCast::class,
        'address' => AddressCast::class,
    ];

    protected $dates = [
        'last_login_at'
    ];


    public function employers()
    {
        return $this->belongsToMany(Employer::class, EmployerUser::class);
    }
    public function locations()
    {
        return $this->belongsToMany(Location::class, LocationUser::class);
    }
}
