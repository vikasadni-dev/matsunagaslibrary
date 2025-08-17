<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            "name"=> "Vika Sadni",
            "username" => "Vika",
            "email"=> "vikasadni@gmail.com",
            "password"=> Hash::make("12345678"),
            "gender" => "Perempuan",
        ]);
        $this->call(CategorySeeder::class);
        $this->call(PublisherSeeder::class);
    }
}
