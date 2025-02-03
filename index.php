<?php
    session_start();

    if(isset($_SESSION['id']))
    {
        echo $_SESSION['name'];
?>
<button onclick="logout()">Log Out</button>
<?php
    }
?>

<script>
    function logout()
    {
        window.location.href = 'backend/logout.php';
    }
</script>