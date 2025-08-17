<?php
namespace App\Enums;

enum ReturnBookStatus: string
{
    case RETURN = "Dikembalikan";
    case CHECKED = "Pengecekan";
    case FINE = "Denda";

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->label,
        ])->values()->toArray();
    }
}
