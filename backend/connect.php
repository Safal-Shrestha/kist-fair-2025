<?php
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "kist_fest2025_automation";

    try{
        $conn = mysqli_connect($db_server,$db_user,$db_pass,$db_name);    
    }
    catch(mysqli_sql_exception){
        echo "Failed to connect to database!";
    }
?>