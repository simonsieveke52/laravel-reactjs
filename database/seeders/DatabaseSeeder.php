<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Employer;
use App\Models\Location;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();


        $employer = Employer::create([
            'name'=> 'Sihq'
        ]);
        $location = Location::create([
            'name'=> 'Office'
        ]);
        $employer->locations()->sync($location->id);

        $user = User::create([
            'first_name'=> 'Brad',
            'last_name'=> 'Martin',
            'email'=> 'bradley.r.martin@me.com',
            'password'=> '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'role'=> 'developer'
        ]);

        $user->employers()->sync($employer);
        $user->locations()->sync($location);

    }
}
