<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Sihq\Bootstrap\Traits\UuidTrait;

// Models
use App\Models\Location;
use App\Models\User;

// Pivots
use App\Models\Pivots\EmployerLocation;
use App\Models\Pivots\EmployerUser;

use Sihq\Casts\FileCast;

use Illuminate\Database\Eloquent\Casts\Attribute;

class Employer extends Model
{
    use HasFactory, UuidTrait;
    
    protected $fillable = [

        'name',
        'logo',
        'maximum_sessions',
        'used_sessions',
        'internal_logo',
        'color',
    ];

    protected $casts = [
        'logo' => FileCast::class,
        'internal_logo' => FileCast::class,
    ];

    protected static function booted()
    {
        static::creating(function ($model) {
            if (!optional($model)->id) {
                $model->id = (string) Str::uuid();
            }
        });
        static::saving(function ($model) {
            if($model->logo && $model->logo->status() === 'staged'){
                $model->logo->persist(true);
                if(isSet($model->getOriginal()['logo'])){
                    $model->getOriginal()['logo']->purge();
                }
            }

            if($model->internal_logo && $model->internal_logo->status() === 'staged'){
                $model->internal_logo->persist(true);
                if(isSet($model->getOriginal()['internal_logo'])){
                    $model->getOriginal()['internal_logo']->purge();
                }
            } 
            return true;
        });
    }


    public function locations()
    {
        return $this->belongsToMany(Location::class, EmployerLocation::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, EmployerUser::class);
    }


}
