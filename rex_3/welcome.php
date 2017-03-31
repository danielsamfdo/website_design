<html>
<body>
<?php 

include_once 'config.php';
$con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or die("Failed to connect to MySQL: " . mysql_error()); 
$db=mysql_select_db(DB_NAME,$con) or die("Failed to connect to MySQL: " . mysql_error()); 
$query = "INSERT INTO prebook (name, email, contact_no, ticket_no) VALUES('$_POST[name]','$_POST[email]','$_POST[phone]','$_POST[ticket]')";
$data = mysql_query ($query)or die(mysql_error()); 
?>

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>
<?php echo $_POST["phone"]; ?>
<?php echo $_POST["ticket"]; ?>
<?php
$to = "danielsamfdo@gmail.com";
$subject = "My subject";
$txt = "$_POST[name] <$_POST[email]><$_POST[phone]> requested for $_POST[ticket] Ticket .Please respond at the earliest.";
$headers = "From: $_POST[email]" . "\r\n" ;

mail($to,$subject,$txt,$headers);

$to = $_POST['email'];
$subject = "My subject";
$txt = "Thank you for your request , we will get back to you shortly";
$headers = "From: danielsamfdo@gmail.com" . "\r\n";

mail($to,$subject,$txt,$headers);

header('Location: events1.html');
?>
</body>
</html>