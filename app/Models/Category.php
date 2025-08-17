<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "slug",
        "description",
        "cover",
    ];
    public function books(): HasMany
    {
        return $this->hasMany(Book::class);
    }
}
