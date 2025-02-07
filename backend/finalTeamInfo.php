<?php

include 'connect.php';

// Define file name
$teamInfo = "export_" . date('Ymd') . ".csv";

// Set headers for download
header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename="' . $teamInfo . '"');

// Open output stream
$output = fopen('php://output', 'w');

$query = "SELECT * FROM teams";
$result = $conn->query($query);

// Fetch and print column names
if ($result->num_rows > 0) {
    $columns = array_keys($result->fetch_assoc());
    fputcsv($output, $columns);

    // Reset pointer to fetch data again
    $result->data_seek(0);
    
    // Fetch rows and print as CSV
    while ($row = $result->fetch_assoc()) {
        fputcsv($output, $row);
    }
} else {
    echo "No data found!";
}

fclose($output);
$conn->close();
?>
