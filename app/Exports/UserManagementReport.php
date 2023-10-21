<?php

namespace App\Exports;

use App\Models\Employer;
use Maatwebsite\Excel\Excel;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;

class UserManagementReport implements FromView
{
    use Exportable;

    /**
    * @return \Illuminate\Support\Collection
    */
    public function view(): View {
        return view('exports.user');
    }
}