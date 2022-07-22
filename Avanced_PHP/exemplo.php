<?php

require 'vendor/autoload.php';

use Betop\AvancedPhp\Search;

$search = new Search();

$result = $search->getAddressFromZipCode('01001000');

print_r($result);