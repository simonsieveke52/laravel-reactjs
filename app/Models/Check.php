<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sihq\Bootstrap\Traits\UuidTrait;

class Check extends Model
{
    use HasFactory, UuidTrait;


    protected $fillable = [
        'check_in',
    ];

    protected $casts = [
        'check_in' => 'json',
    ];
}
