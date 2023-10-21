<?php

namespace App\Http\Controllers\Users;


use App\Models\User;
use App\Models\Employer;
use Maatwebsite\Excel\Classes\LaravelExcelWorksheet;
use Maatwebsite\Excel\Facades\Excel;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
use App\Exports\UserManagementReport;

use Illuminate\Support\Facades\Gate;
 

class Management extends Controller
{
    use Authenticated;

    public $users;
    public $file;

    public function onMount(){
        $this->authorise('viewAny',User::class);
    }
    
    public function upload() {
    }
}