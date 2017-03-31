<?php	

	/* connect to the db */
	$link = mysql_connect('localhost','root','') or die('Cannot connect to the DB');
	mysql_select_db('calorie',$link) or die('Cannot select the DB');

	/* grab the posts from the db*/
	$query = "SELECT name FROM cal WHERE fid=1";
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);

	/* create one master array of the records */
	$posts = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$posts[] = array('post'=>$post);
		}
	}

	
	/* output in necessary format */
		header('Content-type: application/json');
		echo json_encode(array('posts'=>$posts));
	
	/* disconnect from the db */
	@mysql_close($link);

?>