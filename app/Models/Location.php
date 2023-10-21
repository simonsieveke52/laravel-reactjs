<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sihq\Bootstrap\Traits\UuidTrait;

use Sihq\Casts\AddressCast;

// Models
use App\Models\Employer;
use App\Models\User;

// Pivots
use App\Models\Pivots\EmployerLocation;
use App\Models\Pivots\LocationUser;


class Location extends Model
{
    use HasFactory, UuidTrait;
    
    protected $fillable = [
        'name',
        'employer_id',
        'maximum_sessions',
        'used_sessions',
        'reference',
        'address',
        'status'
    ];

    protected $appends = ['session_limit'];

    protected $casts = [
        'address' => AddressCast::class,
    ];

    public function employers()
    {
        return $this->belongsToMany(Employer::class, EmployerLocation::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, LocationUser::class);
    }


    public function getSessionLimitAttribute(){
        $employer_max = optional(optional($this->employers)->first())->maximum_sessions;

        if($employer_max === 0 || $this->maximum_sessions === 0 ){
            // If the employer or the location has -1 sessions
            // they dont have an sessions.
            return 'None';
        }else{
            if($this->maximum_sessions > 0){
                // The location has a session limit.
                if($this->maximum_sessions >=  $employer_max){
                    return 'Until depleted';
                }else{
                    return $this->maximum_sessions;  
                }
            }else  if($this->maximum_sessions === -1){
                // Location has unlimited so it defaults to 
                // the employers maximum divided by locations.
                $total = (optional(optional(optional($this->employers)->first())->locations()->where('maximum_sessions','!=',0))->count() ?? 0);
                if($employer_max > 0 ){
                    return 'Until depleted';
                }else{
                    return 'No limit';
                }
                
            }
        }
    }
}
