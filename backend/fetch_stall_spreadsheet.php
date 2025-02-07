<?php
include 'connect.php';
require '../vendor/autoload.php';

use Google\Client;
use Google\Service\Sheets;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $client = new Client();
    $client->setAuthConfig('../api-keys/kist-fest-2025.json');
    $client->addScope(Sheets::SPREADSHEETS_READONLY);

    $service = new Sheets($client);
    $spreadsheetId = '1VMEMSVYoS_1I4kT96BviP6a7sLY4-2ns-J5M2dZTbac';
    $range = 'Sheet1!A1:B';
    $range2 = 'Sheet2!A1:B';

    $response = $service->spreadsheets_values->get($spreadsheetId, $range);
    $values = $response->getValues();

    $response2 = $service->spreadsheets_values->get($spreadsheetId, $range2);
    $values2 = $response2->getValues();

    $firstRow = true;

    // Clear team_stall table before inserting new values
    $conn->query("TRUNCATE TABLE team_stall");

    // Insert stall names
    foreach ($values as $row) {
        if ($firstRow) {
            $firstRow = false;
            continue;
        }

        $stallName = $conn->real_escape_string($row[0]);

        $stallSQL = "INSERT INTO stalls (stall_name) 
                    VALUES ('$stallName') 
                    ON DUPLICATE KEY UPDATE stall_name='$stallName'";

        if (!$conn->query($stallSQL)) {
            die(json_encode(["error" => "Error inserting stall: " . $conn->error]));
        }
    }

    $firstRow = true;

    // Insert into team_stall table
    foreach ($values2 as $row2) {
        if ($firstRow) {
            $firstRow = false;
            continue;
        }

        $stallName = $conn->real_escape_string($row2[0]);
        $teamName = $conn->real_escape_string($row2[1]);

        // Fetch stall_id
        $fetchStallSQL = "SELECT stall_id FROM stalls WHERE stall_name = '$stallName'";
        $stallResult = $conn->query($fetchStallSQL);
        $stallRow = mysqli_fetch_assoc($stallResult);
        $stallId = $stallRow['stall_id'] ?? null;

        if ($stallId === null) {
            echo json_encode(["error" => "Stall '$stallName' not found in database. Skipping entry."]);
            continue;
        }

        // Fetch team_id
        $fetchTeamSQL = "SELECT team_id FROM teams WHERE name = '$teamName'";
        $teamResult = $conn->query($fetchTeamSQL);
        $teamRow = mysqli_fetch_assoc($teamResult);
        $teamId = $teamRow['team_id'] ?? null;

        if ($teamId === null) {
            echo json_encode(["error" => "Team '$teamName' not found in database. Skipping entry."]);
            continue;
        }

        // Insert into team_stall only if both stall_id and team_id exist
        $linkTeamSQL = "INSERT INTO team_stall (stall_id, team_id) VALUES ($stallId, $teamId)";

        if (!$conn->query($linkTeamSQL)) {
            die(json_encode(["error" => "Error inserting team-stall link: " . $conn->error]));
        }
    }

    echo json_encode(["success" => "Data successfully inserted"]);
} else {
    echo json_encode(["failure" => "Invalid request method: " . $_SERVER['REQUEST_METHOD']]);
}
