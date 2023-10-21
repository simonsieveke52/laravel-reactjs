<?php

namespace App\Models\Pivots;

use Illuminate\Database\Eloquent\Model;

class EmployerUser extends Model
{
    protected $table = "employers_users";
    public $incrementing = false;
    protected $keyType = "string";

    protected $fillable = [];
}
