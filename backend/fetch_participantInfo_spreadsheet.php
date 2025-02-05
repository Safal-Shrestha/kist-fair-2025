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
    $range = 'Sheet1!A1:P';

    $response = $service->spreadsheets_values->get($spreadsheetId, $range);
    $values = $response->getValues();

    $firstRow = true;

    foreach ($values as $row) {
        if ($firstRow) {
            $firstRow = false;
            continue;
        }

        $projectId = intval($row[0]);
        $projectName = $conn->real_escape_string($row[1]);
        $description = $conn->real_escape_string($row[2]);
        $teamSize = intval($row[3]);
        $member1 = $conn->real_escape_string($row[4]);
        $member1Contact = intval($row[5]);
        $member2 = $conn->real_escape_string($row[6]);
        $member2Contact = intval($row[7]);
        $member3 = $conn->real_escape_string($row[8]);
        $member3Contact = intval($row[9]);
        $member4 = $conn->real_escape_string($row[10]);
        $member4Contact = intval($row[11]);
        $member5 = $conn->real_escape_string($row[12]);
        $member5Contact = intval($row[13]);
        $category = $conn->real_escape_string($row[14]);
        $collegeName = $conn->real_escape_string($row[15]);
        $role = "participant";
        $uName = "part"."$projectId";
        $pw = "part"."$projectId"."123";

        $teamSQL = "INSERT INTO teams (team_id, name, description, category, total_member, mem1, mem1Contact, mem2, mem2Contact, mem3, mem3Contact, mem4, mem4Contact, mem5, mem5Contact, organization) 
                VALUES ($projectId, '$projectName', '$description', '$category', $teamSize, '$member1', $member1Contact, '$member2', $member2Contact, '$member3', $member3Contact, '$member4', $member4Contact, '$member5', $member5Contact, '$collegeName') 
                ON DUPLICATE KEY UPDATE team_id=$projectId, name='$projectName', description='$description', category='$category', total_member=$teamSize, mem1='$member1', mem1Contact=$member1Contact, mem2='$member2', mem2Contact=$member2Contact, mem3='$member3', mem3Contact=$member3Contact, mem4='$member4', mem4Contact=$member4Contact, mem5='$member5', mem5Contact=$member5Contact, organization='$collegeName'";

        if (!$conn->query($teamSQL)) {
            // echo "Error: " . $conn->error;
            echo 1010101;
        }
        echo (var_dump($category)."<br>");

        // $userSQL = "INSERT INTO users (name, phone, organization, role, uNa  me, pw) VALUES ('$projectName', $member1Contact, '$collegeName', '$role', '$uName', '$pw') ON DUPLICATE KEY UPDATE ";
    }
}

else
{
    echo json_encode(['failure' => $_SERVER['REQUEST_METHOD']]);
}