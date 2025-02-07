<?php

include 'connect.php';

$problemIdObject = json_decode(file_get_contents("php://input"), true);

$problemId = intval($problemIdObject['id']);

$sql = $conn->prepare("UPDATE problems SET is_solved = 1 WHERE id = ?");
    $sql->bind_param("i", $problemId);
    if ($sql->execute()) {
        echo json_encode(["success" => true, "message" => "Problem solved"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update"]);
    }

// header("Location: /automation-system/Participants/volunteer_problem.html");