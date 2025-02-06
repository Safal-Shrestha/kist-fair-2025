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
        <?php if(isset($_SESSION['id'])) { ?>
          <li <?php if($_SESSION['role'] == 'participant') { echo "class='hidden'"; } ?>>
            <a id="support-pc">Support</a>
          </li>
          <li <?php if($_SESSION['role'] == 'volunteer' || $_SESSION['role'] == 'admin') { echo "class='hidden'"; } ?>>
            <a id="problem-pc">Problems</a>
          </li>
        <?php } ?>
        <li>
          <a id="about-us-pc">About Us</a>
        </li>
      </ul>
    </li>

    <!-- Mobile Menu -->
    <li class="for-mobile">
      <i class="fa-solid fa-bars"></i>
      <div class="mobile-menu">
        <ul>
          <li><a class="schedule-mobile">Schedule</a></li>
          <li><a class="map-mobile">Map</a></li>
          <?php if(isset($_SESSION['id'])) { ?>
            <li <?php if($_SESSION['role'] == 'participant') { echo "class='hidden'"; } ?>>
              <a class="support-mobile">Support</a>
            </li>
            <li <?php if($_SESSION['role'] == 'volunteer' || $_SESSION['role'] == 'admin') { echo "class='hidden'"; } ?>>
              <a class="problem-mobile">Problems</a>
            </li>
          <?php } ?>
          <li><a class="about-us-mobile">About Us</a></li>
        </ul>
      </div>
    </li>
  </ul>
</nav>
