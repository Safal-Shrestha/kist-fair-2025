<?php

include 'connect.php';

$problem = array();

$sql = "SELECT * FROM problems";
$result = $conn->query($sql);

if($result ->num_rows > 0)
{
    while ($row = $result->fetch_assoc()) {
        $problem[] = $row;
    }
}

header('Content-Type: application/json');

echo json_encode($problem);