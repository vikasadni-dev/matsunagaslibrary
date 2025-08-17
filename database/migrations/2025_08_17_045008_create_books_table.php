<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\BookLanguage;
use App\Enums\BookStatus;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('book-_code');
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('author');
            $table->unsignedBigInteger('publication_year'); //tidak bisa memasukkan nilai negatif, ex: -2025
            $table->string('isnb');
            $table->string('language')->default(BookLanguage::INDONESIA->value);
            $table->text('synopsis')->nullable();
            $table->unsignedInteger('number_of_pages')->default(0);
            $table->string('status')->default(BookStatus::AVAILABLE->value);
            $table->string('cover')->nullable();
            $table->unsignedInteger('price')->default(0);
            $table->foreignId('category_id')->constrained('categories')->cascadeOnDelete();
            $table->foreignId('publisher_id')->constrained('publishers')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
