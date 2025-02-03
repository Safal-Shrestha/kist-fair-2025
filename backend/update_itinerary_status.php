<?php
set_time_limit(0);

include 'connect.php';

while (true) {
    // Update status to 'ongoing'
    $conn->query("UPDATE itinerary SET status = 'ongoing' WHERE status = 'upcoming' AND time <= NOW()");

    // Update status to 'completed'
    $conn->query("UPDATE itinerary SET status = 'completed' WHERE status = 'ongoing' AND NOW() >= DATE_ADD(time, INTERVAL duration_min MINUTE)");

    sleep(1); // Wait 1 second before running again
}