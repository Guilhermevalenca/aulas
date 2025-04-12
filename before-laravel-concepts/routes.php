<?php

use flight;

Flight::route('/', function() {
    echo 'Hello World';
});

Flight::start();