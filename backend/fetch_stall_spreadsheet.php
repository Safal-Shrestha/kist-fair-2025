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
    $spreadsheetId = '1VMEMSVYoS_1I4kT96BviP6a7sLY4-2ns-J5M2dZTbac';
    $range = 'Sheet1!A1:B';

    $response = $service->spreadsheets_values->get($spreadsheetId, $range);
    $values = $response->getValues();

    $firstRow = true;

    $conn->query("TRUNCATE TABLE team_stall");
    foreach ($values as $row) {
        if ($firstRow) {
            $firstRow = false;
            continue;
        }

        $stallName = $conn->real_escape_string($row[0]);
        $teamName = $conn->real_escape_string($row[1]);

        $stallSQL = "INSERT INTO stalls (stall_name) 
                VALUES ('$stallName') 
                ON DUPLICATE KEY UPDATE stall_name='$stallName'";

        if (!$conn->query($stallSQL)) {
            echo "Error: " . $conn->error;
        }

        // $fetchTeamSQL = "SELECT * from teams WHERE name = '$teamName'";
        // $teamResult = $conn->query($fetchTeamSQL);
        // $teamRow = mysqli_fetch_array($teamResult);
        // $teamId = $teamRow['team_id'];

        // $linkTeamSQL = "INSERT INTO team_stall (stall_id, team_id)
        //             VALUES ('$stallName', '$teamId')";

        // if (!$conn->query($linkTeamSQL)) {
        //     echo "Error: " . $conn->error;
        // }
    }
}

else
{
    echo json_encode(['failure' => $_SERVER['REQUEST_METHOD']]);
}