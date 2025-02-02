<?php
include 'connect.php';
date_default_timezone_set('Asia/Kathmandu');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
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

    $register_query = "INSERT INTO entry_data (Name, Phone_no, Organization, Registration_mode, Added_at) 
    VALUES (?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($register_query);

    $stmt->bind_param("sssss", $name, $phone_no, $organization, $register_mode, $time);

    if ($stmt->execute()) {
        header("location: visitor_schedule.html");
        // echo "Registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    mysqli_close($conn);
}
?>
