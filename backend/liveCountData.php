<?php

include 'connect.php';

$participantCount = 0;
$visitorCount = 0;
$projectCount = -1;

$user_result = $conn->query("SELECT * from users");
if ($user_result->num_rows > 0) {
    while ($row = $user_result->fetch_assoc()) {
        if($row['role']=='participant')
        {
            $participantCount++;
        }

        if($row['role']=='visitor')
        {
            $visitorCount++;
        }
    }
}


$project_result = $conn->query("SELECT * from teams");
if ($project_result->num_rows > 0)
{
    while ($row = $project_result->fetch_assoc()){
        $projectCount++;
    }
}

header('Content-Type: application/json');
echo json_encode([
    "visitor" => "$visitorCount",
    "participant" => "$participantCount",
    "project" => "$projectCount"
]);