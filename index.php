<?php
  include 'backend/connect.php';

  session_start();

    if(isset($_SESSION['id']))
    {
        echo $_SESSION['name'];
?>
<button onclick="logout()">Log Out</button>
<?php
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome To KIST Fair</title>
  <link rel="stylesheet" href="assets/css/nav.css">
  <link rel="stylesheet" href="assets/css/schedule.css">
  <link rel="stylesheet" href="assets/css/font.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
</head>

<body class="event-schedule">
  <nav>
    <ul>
      <li id="logo">
        KIST FAIR 2025
      </li>
      <li class="for-non-mobile">
        <ul class="inner-list">
          <li>
            <a href="index.php" id="schedule-pc">Schedule</a>
          </li>
          <li>
            <a href="map.html" id="map-pc">Map</a>
          </li>
        </ul>
      </li>
      <li class="for-mobile">
        <ul class="bar">
          <i class="fa-solid fa-bars"></i>
        </ul>
        <div class="mobile">
          <a href="index.php" class="schedule-mobile">Schedule</a>
          <a href="map.html" class="map-mobile">Map</a>
        </div>
      </li>
    </ul>
  </nav>
  <div id="body">
    <div id="schedule-container">
      <div id="schedule-container-title">
        KIST FAIR 2025 SCHEDULE
      </div>
      <div id="schedule-container-body">
        <!-- <div class="schedule schedule1">
          <div class="schedule-title">
            <div class="schedule-title-status"></div>
            FAIR OPENING
          </div>
          <div class="schedule-time">
            10:00
          </div>
          <div class="schedule-status">
            Ongoing
          </div>
          <div class="schedule-description">
            View Description
          </div>
        </div> -->
      </div>
    </div>
    <div id="finished-schedule-container">
      <div id="finished-schedule-container-title">
        COMPLETED EVENTS
      </div>
      <div id="finished-schedule-container-body">
        <!-- <div class="finished-schedule finished-schedule1">
          <div class="finished-schedule-title">
            <div class="finished-schedule-title-status"></div>
            FAIR OPENING
          </div>
          <div class="finished-schedule-time">
            10:00
          </div>
          <div class="finished-schedule-status">
            Completed
          </div>
          <div class="finished-schedule-description">
            View Description
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <div class="description-body">
    <div class="description-body-title">
    </div>
    <div class="description-body-description">
    </div>
    <i class="fa-solid fa-xmark description-body-cross-button"></i>
    <div class="description-body-time">00:00</div>
  </div>
  <div id="overlay"></div>
  <script src="assets/js/nav.js"></script>
  <script src="assets/js/getSchedule.js"></script>
</body>
<script>
    function logout()
    {
        window.location.href = 'backend/logout.php';
    }
</script>
</html>