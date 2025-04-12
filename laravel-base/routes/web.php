<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $books = [
        ['title' => 'Book 1'],
        ['title' => 'Book 2'],
        ['title' => 'Book 3'],
        ['title' => 'Book 4'],
        ['title' => 'Book 5'],
        ['title' => 'Book 6'],
        ['title' => 'Book 7'],
        ['title' => 'Book 8'],
        ['title' => 'Book 9'],
        ['title' => 'Book 10'],
        ['title' => 'Book 11'],
        ['title' => 'Book 12'],
    ];
    return view('test', [
        'books' => $books,
    ]);
});