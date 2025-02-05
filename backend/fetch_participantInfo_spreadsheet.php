<?php
include 'connect.php';
require '../vendor/autoload.php';

use Google\Client;
use Google\Service\Sheets;

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $client = new Client();
    $client->setAuthConfig('../api-keys/kist-fest-2025.json');
    $client->addScope(Sheets::SPREADSHEETS_READONLY);

    $service = new Sheets($client);
    $spreadsheetId = '1LmwdUAVJ4y7Fl6zDtNg9wuTFJKDZ8UW-91HTWJD32Hc';
    $range = 'Sheet1!A1:I';

    $response = $service->spreadsheets_values->get($spreadsheetId, $range);
    $values = $response->getValues();

    $firstRow = true;

    foreach ($values as $row) {
        if ($firstRow) {
            $firstRow = false;
            continue;
        }

        $stall = intval($row[0]);
        $projectName = $conn->real_escape_string($row[1]);
        $teamSize = $conn->real_escape_string($row[2]);
        $member1 = $conn->real_escape_string($row[3]);
        $member2 = $conn->real_escape_string($row[4]);
        $member3 = $conn->real_escape_string($row[5]);
        $member4 = $conn->real_escape_string($row[6]);
        $member5 = $conn->real_escape_string($row[7]);
        $projectCategory = $conn->real_escape_string($row[8]);

        $sql = "INSERT INTO participantinfo (stallNo, projectName, teamSize, member1, member2, member3, member4, member5, projectCategory) 
                VALUES ($stall, '$projectName', '$teamSize', '$member1', '$member2', '$member3', '$member4', '$member5', '$projectCategory') 
                ON DUPLICATE KEY UPDATE stallNo='$stall', projectName='$projectName', teamSize='$teamSize', member1='$member1', member2='$member2', member3='$member3', member4='$member4', member5='$member5', projectCategory='$projectCategory'";

        if (!$conn->query($sql)) {
            echo "Error: " . $conn->error;
        }
    }
}

else
{
    echo json_encode(['failure' => $_SERVER['REQUEST_METHOD']]);
}