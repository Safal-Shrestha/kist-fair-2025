<?php
session_start();
include 'connect.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $problem = $_POST["problem"];
    $stall_no = $_POST["stall_no"];
    $description = $_POST["description"];

    $register_query = "INSERT INTO users (name,email,phone,role,organization)
    VALUES (?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($register_query);

    $stmt->bind_param("sssss", $name, $email, $phone_no, $register_mode, $organization);

    if ($stmt->execute()) {
        session_start();
        $_SESSION['id'] = session_create_id();
        header("location:../index.php");
    } 
    
    else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}
