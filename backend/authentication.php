<?php
    include 'connect.php';

    $username = $_POST["name"];
    $password = $_POST["password"];

    //to prevent from mysqli injection  
    $username = stripcslashes($username);  
    $password = stripcslashes($password);  
    $username = mysqli_real_escape_string($conn, $username);  
    $password = mysqli_real_escape_string($conn, $password);  

    $sql = "SELECT *from teams where user_name = '$username' and password = '$password'";  
    $result = mysqli_query($conn, $sql);  
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
    $count = mysqli_num_rows($result);
    $role = "participant";
    if($row['user_name']=='part_volunteers')
    {
        $role = "volunteer";
    }

    if($count == 1){  
        session_start();
        $_SESSION['id'] = session_create_id();
        $_SESSION['username'] = $row['user_name'];
        $_SESSION['role'] = $role;
        header("location: ../index.php");
    }  
    else{ 
        session_start();
        $_SESSION["errorMessage"] = "Invalid Credentials";
        header("Location: /automation-system/Participants/login_page.php");
    }