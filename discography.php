<?php

header('Content-Type: application/json');

$discography = file_get_contents('discography.json');;

echo $discography;