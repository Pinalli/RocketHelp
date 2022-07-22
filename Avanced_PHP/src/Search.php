<?php

namespace Betop\AvancedPhp;

class Search 
{
    private $url ="https://viacep.com.br/ws/";

    public function getAddressFromZipCode(string $zipCode ): array
    {
        $zipCode = preg_replace('/[^0-9]/', '', $zipCode);
        $url = $this->url . $zipCode . "/json/";
       
        $get =  file_get_contents($this->url .  $zipCode . '/json/');
      
            return (array) json_decode($get);
        
    }
}