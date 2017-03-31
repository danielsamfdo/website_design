<!DOCTYPE html>
<html>
<head>
<link href="stylesheet.css" rel="stylesheet">
<script type="text/javascript "src="jquery.js"></script>
<script>
<?php
// Create connection
$con=mysqli_connect("localhost","root","","calorie");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
else{
	$result = mysqli_query($con,"SELECT * FROM type");?>
	var TYPES=[];
	var food_items=[[]];
	var cal_table=[[]];
	<?php

  	while($row = mysqli_fetch_array($result)) 
  	{
  		echo "TYPES.push(\"".$row['TYPE']."\");";
  		$x="[";
  		$y="[";
  		$result1=mysqli_query($con,"SELECT name,calories FROM cal where fid=".$row['fid']);
  		while($row1 = mysqli_fetch_array($result1))
  		{
  			$x=$x."\"".$row1['name']."\",";
  			$y=$y.$row1['calories'].",";
  			//echo "\"".$row1['name']."\""."\"".$row1['calories']."\"";
  			

  		} 	
  		$x=rtrim($x, ",");
  		$y=rtrim($y, ",");
  		$x=$x."]";
  		$y=$y."]";
  		echo "food_items.push(". $x .");";
  		echo "cal_table.push(". $y .");";
  		
	}
	
	}
?>
var s="<option selected=\"selected\" disabled=\"disabled\">Select an Option</option>";
for(i=0;i<TYPES.length;i++)
{
    s=s+"<option value=\""+TYPES[i]+"\">"+TYPES[i]+"</option>";
}

var Myfunction = function(type){
	var elt="<option selected=\"selected\" disabled=\"disabled\">Select an Option</option>";
	var ind=TYPES.indexOf(type)+1;
	for(i=0;i<food_items[ind].length;i++)
	{
		elt=elt+"<option value=\""+cal_table[ind][i]+"\">"+food_items[ind][i]+"</option>";
	}
	return elt;
	
}
$(document).ready(function(){
	$('.container .Tab .row .type').append(s);
	$(".container .Tab .row .type").change(function(){
        var ty=($(this).val());
        $('.container .Tab .row .food').empty();
        $('.container .Tab .row .food').append(Myfunction(ty));
        alert(Myfunction(ty));
    });
   $(".container .Tab .row1 .type").change(function(){
        var ty=($(this).val());
        $('.container .Tab .row1 .food').empty();
        $('.container .Tab .row1 .food').append(Myfunction(ty));
        alert(Myfunction(ty));
    });
    $('.container .Tab .btn').click(function(){
    	$('.container .Tab ').append('<div class="row1"><select class="type">'+s+'</select><select class="food"></select></div>')
    });
    $(".container .Tab .row1 .rem").click(function(){
    	$(this).Remove();
    });
});
</script>
<script type="text\javascript" href="scriptfory.js"></script>
</head>
<body>
	<div class="container">
		
			<table>
				<div class="Tab">
						<div class="btn">Add item!</div>
						<div class="row">
							<select class="type"></select>
							<select class="food"></select>
						</div>		
				</div>			
			</table>
		
	</div>
</body>
</html>