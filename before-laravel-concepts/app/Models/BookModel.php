<?php

namespace App\Models;

class BookModel
{
    public static function all()
    {
        return [
            ['id' => 1, 'title' => 'Livro 1'],
            ['id' => 2, 'title' => 'Livro 2'],
            ['id' => 3, 'title' => 'Livro 3'],
        ];
    }
}