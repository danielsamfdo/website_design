<!DOCTYPE html>
<html>
<script>
var Myfunc = function()
</script>
<?php
// Create connection
$con=mysqli_connect("localhost","root","","calorie");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
else{
	$result = mysqli_query($con,"SELECT * FROM type");
	echo "<form>";
	echo "<table>";
	echo "<tr>";
	echo "<td><input list=\"food-types\"><datalist id=\"food-types\">";
	echo "<select onchange=\"Myfunc()\">"
  	while($row = mysqli_fetch_array($result)) 
  	{
  		echo "<option value=\"".$row['TYPE']."\">";
	}
	echo "<//select>";
	echo "</tr>";
	
	echo "</form>";
	echo "Connected";
}
?>
</html>