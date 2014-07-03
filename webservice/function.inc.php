<?php
    function parse_csv($filename){
        $data = array();
        $csvFile = file('bddRatp.csv');
        foreach ($csvFile as $line) {
            $data[] = str_getcsv($line);
        }
        unset($data[0]);
        foreach($data as $k => $v){
            $data[$k] = explode(';',$v[0]);
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