<?php
include 'connect.php';
require '../vendor/autoload.php';

use Google\Client;
use Google\Service\Sheets;

if($_SESSION['REQUEST_METHOD'] == 'POST')
{
    $client = new Client();
    $client->setAuthConfig('../api-keys/kist-fest-2025-itinerary.json');
    $client->addScope(Sheets::SPREADSHEETS_READONLY);

    $service = new Sheets($client);
    $spreadsheetId = '1kRENcGrHV418A8v5Fw7JTSaOqtCHzVRCoGfjRwIc-Ak';
    $range = 'Sheet1!A1:F';

    $response = $service->spreadsheets_values->get($spreadsheetId, $range);
    $values = $response->getValues();

    $firstRow = true;

    foreach ($values as $row) {
        if ($firstRow) {
            $firstRow = false;
            continue;
        }

        $id = intval($row[0]);
        $name = $conn->real_escape_string($row[1]);
        $description = $conn->real_escape_string($row[2]);
        $time = $conn->real_escape_string($row[3]);
        $duration = intval($row[4]);
        $status = $conn->real_escape_string($row[5]);

        $sql = "INSERT INTO itinerary (id, name, description, time, duration_min, status) 
                VALUES ($id, '$name', '$description', '$time', $duration, '$status') 
                ON DUPLICATE KEY UPDATE name='$name', description='$description', time='$time', duration_min=$duration, status='$status'";

        if (!$conn->query($sql)) {
            echo "Error: " . $conn->error;
        }
    }
}

else
{
    echo json_encode(['failue' => $_SESSION['REQUEST_METHOD']]);
}