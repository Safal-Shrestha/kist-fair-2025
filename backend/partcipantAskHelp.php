<?php
session_start();
include 'connect.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $problem = $_POST["problem"];
    $description = $_POST["description"];
    $team_id = $_SESSION['id'];

    $fetchStallQuery = "SELECT * FROM team_stall WHERE team_id='$team_id'";
    $stallResult = $conn->query($fetchStallQuery);
    $row = mysqli_fetch_array($stallResult);
    $stall_no = $row['stall_id'];
    echo json_encode($stall_no);
    // if(isset($_POST["stall_no"]))
    // {
    //     $stall_no = $_POST["stall_no"];
    // }


    $problem_query = "INSERT INTO problems (title,description,team_id,stall_id)
    VALUES (?, ?, ?, ?)";

    $stmt = $conn->prepare($problem_query);

    $stmt->bind_param("ssii", $problem, $description, $team_id, $stall_no);

    $stmt->execute();

    $stmt->close();

    header("Location: /automation-system");

}