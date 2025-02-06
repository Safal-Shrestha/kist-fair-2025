<?php

include 'connect.php';

$problem = array();

$sql = "SELECT * FROM problems";
$result = $conn->query($sql);

if($result > 0)
{
    while ($row = $itinerary_result->fetch_assoc()) {
        $problem[] = $row;
    }
}

header('Content-Type: application/json');

echo json_encode($problem);