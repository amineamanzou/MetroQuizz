<?php
    function parse_csv($filename){
        $data = array();
        $csvFile = file('bddRatp.csv');
        foreach ($csvFile as $line) {
            $data[] = str_getcsv($line);
        }
        return $data;
    }
    
    function debug($var,$block = false){
        echo "<pre>";
        var_dump($var);
        echo "</pre>";
        if($block){
            die();
        }
    }

?>