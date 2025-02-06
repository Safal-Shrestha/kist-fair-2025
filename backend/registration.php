<?php
include 'connect.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $organization = $_POST["organization"];
    $phone_no = $_POST["number"];
    $register_mode = "visitor";

    $register_query = "INSERT INTO users (name,email,phone,role,organization)
    VALUES (?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($register_query);

    $stmt->bind_param("sssss", $name, $email, $phone_no, $register_mode, $organization);

    if ($stmt->execute()) {
        header("location:../index.php");
    } 
    
    else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}
