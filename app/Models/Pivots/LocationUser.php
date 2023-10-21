<?php

namespace App\Models\Pivots;

use Illuminate\Database\Eloquent\Model;

class LocationUser extends Model
{
    protected $table = "locations_users";
    public $incrementing = false;
    protected $keyType = "string";

    protected $fillable = [];
}
