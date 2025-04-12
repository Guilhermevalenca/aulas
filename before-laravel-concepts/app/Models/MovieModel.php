<?php

namespace App\Models;

class MovieModel
{
    public static function all()
    {
        return [
            ['id' => 1, 'title' => 'Filme 1'],
            ['id' => 2, 'title' => 'Filme 2'],
            ['id' => 3, 'title' => 'Filme 3'],
        ];
    }
}