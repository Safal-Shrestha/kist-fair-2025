<?php

include 'connect.php';

$itinerary_result = $conn->query("SELECT * from itinerary");

$itinerary = array();

if ($itinerary_result->num_rows > 0) {
    while ($row = $itinerary_result->fetch_assoc()) {
        $itinerary[] = $row;
    }
}

header('Content-Type: application/json');

echo json_encode($data);