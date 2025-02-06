<?php
include 'connect.php';
require '../vendor/autoload.php';

use Google\Client;
use Google\Service\Sheets;

function uploadVolunteer($member, $memberContact, $stream, $organization, $role)
{
    include 'connect.php';
    if ($member != '') {
        $checkSQL = "SELECT id FROM users WHERE name = '$member' AND organization = '$organization' AND phone = '$memberContact'";
        $result = $conn->query($checkSQL);
    
        if ($result->num_rows > 0) {
            $updateSQL = "UPDATE users 
                          SET stream = '$stream', role = '$role' 
                          WHERE name = '$member' AND organization = '$organization' AND phone = '$memberContact'";
            if (!$conn->query($updateSQL)) {
                echo "Error updating record: " . $conn->error;
            }
        } else {
            $insertSQL = "INSERT INTO users (name, phone, organization, role, stream) 
                          VALUES ('$member', $memberContact, '$organization', '$role', '$stream')";
            if (!$conn->query($insertSQL)) {
                echo "Error inserting record: " . $conn->error;
            }
        }
    }
}

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $client = new Client();
    $client->setAuthConfig('../api-keys/kist-fest-2025.json');
    $client->addScope(Sheets::SPREADSHEETS_READONLY);

    $service = new Sheets($client);
    $spreadsheetId = '1ejuUzi2utiZBI_DYKSTVE7f9VOUeKvX5K-wYF-MkmFw';
    $range = 'Sheet1!A1:E';

    $response = $service->spreadsheets_values->get($spreadsheetId, $range);
    $values = $response->getValues();

    $firstRow = true;

    foreach ($values as $row) {
        if ($firstRow) {
            $firstRow = false;
            continue;
        }

        $name = $conn->real_escape_string($row[1]);
        $stream = $conn->real_escape_string($row[2]);
        $phone_number = intval($row[3]);
        $organization = $conn->real_escape_string($row[4]);
        $role = "volunteer";
        
        uploadVolunteer($name, $phone_number, $stream, $organization, $role);
    }
}

else
{
    echo json_encode(['failure' => $_SERVER['REQUEST_METHOD']]);
}