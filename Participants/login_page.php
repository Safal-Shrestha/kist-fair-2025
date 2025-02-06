<?php
  session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page | Participants & Volunteer</title>
  <link rel="stylesheet" href="../assets/css/form.css">
  <link rel="stylesheet" href="../assets/css/font.css">
</head>

<body>
  <div class="main-body">
    <img id="logo-form" src="../assets/img/logo.png" alt="Logo">
    <form id="registration-form" action="../backend/authentication.php" method="POST">
      <div class="note">
        Login Page for Participants & Volunteers
      </div>
      <?php
        if(isset($_SESSION["errorMessage"]))
        {
          echo ("<div class='invalid'>".$_SESSION["errorMessage"]."</div>");
        }
      ?>
      <div>
        <label for="name">Username <span>*</span></label>
        <input type="text" name="name" id="name" placeholder="Enter your username" autocomplete="off" class="input">
      </div>
      <div>
        <label for="password">Password <span>*</span></label>
        <input type="password" name="password" id="email" placeholder="Enter your password" autocomplete="off"
          class="input">
      </div>
      <div id="submit-button-holder">
        <button id="submit" type="submit">Submit</button>
      </div>
      <div class=" field-note">Note: Field with * must be filled before submitted
      </div>
    </form>
    <script>
      const errors = document.querySelectorAll('.error');
      errors.forEach(error => {
        error.style.display = 'none';
      })
      let name;
      document.querySelector('#registration-form').addEventListener('submit', (e) => {
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        if (name === '' || email === '') {
          alert('All the field with * must be filled!');
          e.preventDefault();
        }
        let numberError = document.querySelector('.number-error').style.display;
        let numberLengthError = document.querySelector('.number-length-error').style.display;
        if (nameError === 'block') {
          alert('Enter all the fields correctly!');
          e.preventDefault();
        }
      })
    </script>
  </div>
</body>

</html>