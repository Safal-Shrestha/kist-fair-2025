<?php
include 'connect.php';
require '../vendor/autoload.php';

use Google\Client;
use Google\Service\Sheets;

function shortenString($str)
{
    $parts = preg_split('/[:\-]/', $str, 2);
    return isset($parts[0]) ? trim($parts[0]) : '';
}

function uploadMember($member, $memberContact, $role, $organization)
{
    include 'connect.php';
    if ($member != '') {
        $checkSQL = "SELECT id FROM users WHERE name = '$member' AND organization = '$organization'";
        $result = $conn->query($checkSQL);
    
        if ($result->num_rows > 0) {
            $updateSQL = "UPDATE users 
                          SET phone = $memberContact, role = '$role' 
                          WHERE name = '$member' AND organization = '$organization'";
            if (!$conn->query($updateSQL)) {
                echo "Error updating record: " . $conn->error;
            }
        } else {
            $insertSQL = "INSERT INTO users (name, phone, organization, role) 
                          VALUES ('$member', $memberContact, '$organization', '$role')";
            if (!$conn->query($insertSQL)) {
                echo "Error inserting record: " . $conn->error;
            }
        }
    }
}

function linkMemberToTeam($member, $organization, $teamId)
{
    include 'connect.php';

    if ($member != '') {
        $userSQL = "SELECT id FROM users WHERE name = '$member' AND organization = '$organization'";
        $userResult = $conn->query($userSQL);

        if ($userResult->num_rows > 0) {
            $userRow = $userResult->fetch_assoc();
            $userId = $userRow['id'];

            $checkLinkSQL = "SELECT id FROM team_members WHERE team_id = $teamId AND member_id = $userId";
            $checkLinkResult = $conn->query($checkLinkSQL);

            if ($checkLinkResult->num_rows == 0) {
                $insertLinkSQL = "INSERT INTO team_members (team_id, member_id) VALUES ($teamId, $userId)";
                if (!$conn->query($insertLinkSQL)) {
                    echo "Error linking member to team: " . $conn->error;
                }
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

        $user_name = str_replace(' ', '', $projectName);
        $user_name = strtolower($user_name);
        $user_name = shortenString($user_name);
        
        $uName = "part_"."$user_name";
        $pw = "$user_name"."123";

        $teamSQL = "INSERT INTO teams (team_id, name, description, category, total_member, organization, user_name, password) 
                VALUES ($projectId, '$projectName', '$description', '$category', $teamSize, '$collegeName', '$uName', '$pw') 
                ON DUPLICATE KEY UPDATE team_id=$projectId, name='$projectName', description='$description', category='$category', total_member=$teamSize, organization='$collegeName', user_name='$uName', password='$pw'";

        if (!$conn->query($teamSQL)) {
            echo "Error: " . $conn->error;
        }

        uploadMember($member1, $member1Contact, $role, $collegeName);
        uploadMember($member2, $member2Contact, $role, $collegeName);
        uploadMember($member3, $member3Contact, $role, $collegeName);
        uploadMember($member4, $member4Contact, $role, $collegeName);
        uploadMember($member5, $member5Contact, $role, $collegeName);

        linkMemberToTeam($member1, $collegeName, $projectId);
        linkMemberToTeam($member2, $collegeName, $projectId);
        linkMemberToTeam($member3, $collegeName, $projectId);
        linkMemberToTeam($member4, $collegeName, $projectId);
        linkMemberToTeam($member5, $collegeName, $projectId);
    }
}

else
{
    echo json_encode(['failure' => $_SERVER['REQUEST_METHOD']]);
}