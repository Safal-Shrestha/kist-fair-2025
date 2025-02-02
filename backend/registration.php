<?php
include 'connect.php';
date_default_timezone_set('Asia/Kathmandu');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $organization = $_POST["organization"];
    $phone_no = $_POST["number"];

    if (isset($_POST['note']) && $_POST['note'] == 'Note: Registration Form for non participants') {
        $register_mode = "visitor";
    } else {
        if (isset($_POST['registration_mode']) && ($_POST['registration_mode'] == 'participants' || $_POST['registration_mode'] == 'volunteer')) {
            $register_mode = $_POST['registration_mode'];
        } else {
            $register_mode = "participant";
        }
    }

    $time = date("h:i:sa");

    $register_query = "INSERT INTO registration (created_at,name,email,phone,registration_mode,organization)
    VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($register_query);

    $stmt->bind_param("ssssss", $time, $name, $email, $phone_no, $register_mode, $organization);

    if ($stmt->execute()) {
        header("location: ../Visitor/visitor_schedule.html");
        // echo "Registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    mysqli_close($conn);
}
?>
