<?php

namespace App\Models\Pivots;

use Illuminate\Database\Eloquent\Model;

class EmployerLocation extends Model
{
    protected $table = "employers_locations";
    public $incrementing = false;
    protected $keyType = "string";

    protected $fillable = [];
}
