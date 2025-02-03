<?php
include 'connect.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $organization = $_POST["organization"];
    $phone_no = $_POST["number"];

    if (isset($_POST['note']) && $_POST['note'] == 'visitor') {
        $register_mode = "visitor";
    } else {
        if (isset($_POST['registration_mode']) && ($_POST['registration_mode'] == 'participants' || $_POST['registration_mode'] == 'volunteer')) {
            $register_mode = $_POST['registration_mode'];
        } else {
            $register_mode = "participant";
        }
    }

    $register_query = "INSERT INTO registration (name,email,phone,registration_mode,organization)
    VALUES (?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($register_query);

    $stmt->bind_param("sssss", $name, $email, $phone_no, $register_mode, $organization);

    if ($stmt->execute()) {
        if($register_mode=="visitor")
        {
            header("location:../index.php");
        }
        else
        {
            session_start();
            $_SESSION['name'] = $name;
            $_SESSION['id'] = session_create_id();
            header("location:../index.php");
        }
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    mysqli_close($conn);
}
?>
