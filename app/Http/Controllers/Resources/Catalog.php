<?php

namespace App\Http\Controllers\Resources;


use App\Models\Content;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Catalog extends Controller
{
    use Authenticated;
    
    public $catalog;

    public $role;

    public function onMount(){
        $this->authorise('viewAny',Content::class);
        $this->catalog = Content::all();
        $this->role  = optional(auth()->user())->role;
    }
  
}