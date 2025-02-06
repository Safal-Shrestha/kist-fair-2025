<?php
  session_start();
?>

<nav>
  <ul>
    <li id="logo">
      KIST FAIR 2025
    </li>
    <li class="for-non-mobile">
      <ul class="inner-list">
        <li>
          <a id="schedule-pc">Schedule</a>
        </li>
        <li>
          <a id="map-pc">Map</a>
        </li>
        <?php
          if(isset($_SESSION['id']))
          {
        ?>
        <li>
          <a <?php
            if($_SESSION['role'] == 'participant')
            { echo "class = 'hidden'";}?>id="support-pc">Support</a>
        </li>
        <li>
          <a <?php
          if($_SESSION['role'] == 'volunteer' ||$_SESSION['role'] == 'admin')
          { echo "class = 'hidden'";}
        ?> id="problem-pc">Problems</a>
        </li>
        <?php
          }
        ?>
        <li>
          <a id="about-us-pc">About Us</a>
        </li>
      </ul>
    </li>
    <li class="for-mobile">
      <ul class="bar">
        <i class="fa-solid fa-bars"></i>
      </ul>
      <div class="mobile">
        <a class="schedule-mobile">Schedule</a>
        <a class="map-mobile">Map</a>
        <?php
          if(isset($_SESSION['id']))
          {
        ?>
        <li>
          <a <?php
                if($_SESSION['role'] == 'participant')
                { echo "class = 'hidden'";}
          ?> id="support-pc">Support</a>
        </li>
        <li>
          <a <?php
          if($_SESSION['role'] == 'volunteer' ||$_SESSION['role'] == 'admin')
          {echo "class = 'hidden'";}
        ?> id="problem-pc">Problems</a>
        </li>
        <?php
          }
        ?>
        <a  class="about-us-mobile">About us</a>
      </div>
    </li>
  </ul>
</nav>