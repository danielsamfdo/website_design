<!DOCTYPE HTML>
<html>
	<head>
		<title>Rex - Pre Book</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
		<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-panels.min.js"></script>
		<script src="js/init.js"></script>
		<noscript>
			<link rel="stylesheet" href="css/skel-noscript.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-desktop.css" />
		</noscript>
	</head>
	<body>

	<div id="header-wrapper">

		<!-- Header -->
			<div id="header">
				<div class="container">
						
					<!-- Logo -->
						<div id="logo">
							<img src="images/Rex Logo_PNG.png"></img>
							<h1><a href="#">Rex</a></h1>
						</div>
					
					<!-- Nav -->
						<nav id="nav">
							<ul>
								<li><a href="index.html">Home</a></li>
								<li><a href="events1.html">Events</a></li>
								<li><a href="video.html">Gallery</a></li>
								<li class="active"><a href="prebook.php">Pre - Book</a></li>
							</ul>
						</nav>
	
				</div>
			</div>
		<!-- Header -->

		<!-- Banner -->
			<div id="banner">
				<div class="container">
				</div>
			</div>
		<!-- /Banner -->

	</div>

	<!-- Main -->
		<div id="main">
		
			<div class="container">

				<div class="row">
					<section>
						<header>
							<h2>Rex</h2>
							<span class="byline">The End Time Express - Pre Book</span>
						</header>
						<script>
							function validateForm() {
							    var x = document.forms["book"]["validator"].value;
							    if (x !== "83tsU" ) {
							        alert("Wrong Captcha.");
							        return false;
							    }
							}
						</script>
						<form action="welcome.php" name="book" class="bookform" onsubmit="return validateForm()" method="post" >
							<label>Name:</label> <input type="text" name="name" required><br><br>
							<label>E-mail:</label> <input type="text" name="email" required><br><br>
							<label>Phone Number:</label> <input type="number" name="phone" required><br><br>
							<label>No. of Tickets:</label> <input type="number" name="ticket" required><br><br>
							<label><img src="images/captcha.png" /></label> <input type="text" name="validator" id="validator" size="4" /><br><br>
							<input type="submit">
							
						</form>
						
					</section>
				</div>

			</div>
		</div>
	<!-- /Main -->

	<!-- Featured -->
<!-- 		<div id="featured">
			<div class="container">
				<section>
					<header>
						<h2>Fusce ultrices fringilla metus</h2>
						<span class="byline">Posuere eleifend odio quisque semper mattis</span>
					</header>
				</section>
				<div class="row">
					<section class="4u">
						<a href="#" class="image full"><img src="images/pics01.jpg" alt=""></a>
						<p>Quisque dictum. Integer nisl risus, sagittis convallis, rutrum id, elementum congue, nibh. Suspendisse dictum porta lectus.</p>
						<p><a href="#" class="button">View Full Details</a></p>
					</section>
					<section class="4u">
						<a href="#" class="image full"><img src="images/pics03.jpg" alt=""></a>
						<p>Pellentesque tristique ante ut risus. Integer nisl risus, sagittis convallis, rutrum id, elementum congue, nibh. Suspendisse dictum porta lectus.</p>
						<p><a href="#" class="button">View Full Details</a></p>
					</section>
					<section class="4u">
						<a href="#" class="image full"><img src="images/pics04.jpg" alt=""></a>
						<p>Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl rutrum id, elementum congue, nibh. Suspendisse dictum porta lectus.</p>
						<p><a href="#" class="button">View Full Details</a></p>
					</section>
				</div>
			</div>
		</div>
 -->	<!-- /Featured -->

	<!-- Footer -->
		<!-- <div id="footer">
			<div class="container">
				<div class="row">
					<section class="4u">
						<header>
							<h2>Nulla eleifend</h2>
						</header>
						<ul class="default">
							<li><a href="#">Pellentesque quis elit non gravida blandit.</a></li>
							<li><a href="#">Lorem ipsum dolor sit consectetuer adipiscing elit.</a></li>
							<li><a href="#">Phasellus nec erat sit nibh pellentesque congue.</a></li>
							<li><a href="#">Cras vitae metus aliquam pellentesque pharetra.</a></li>
							<li><a href="#">Duis non ante in metus commodo euismod lobortis.</a></li>
						</ul>
					</section>
					<section class="4u">
						<header>
							<h2>Etiam posuere</h2>
						</header>
						<ul class="default">
							<li><a href="#">Pellentesque quis elit non gravida blandit.</a></li>
							<li><a href="#">Lorem ipsum dolor sit consectetuer adipiscing elit.</a></li>
							<li><a href="#">Phasellus nec erat sit nibh pellentesque congue.</a></li>
							<li><a href="#">Cras vitae metus aliquam pellentesque pharetra.</a></li>
							<li><a href="#">Duis non ante in metus commodo euismod lobortis.</a></li>
						</ul>
					</section>
					<section class="4u">
						<header>
							<h2>Mauris vulputate</h2>
						</header>
						<ul class="default">
							<li><a href="#">Pellentesque quis elit non gravida blandit.</a></li>
							<li><a href="#">Lorem ipsum dolor sit consectetuer adipiscing elit.</a></li>
							<li><a href="#">Phasellus nec erat sit nibh pellentesque congue.</a></li>
							<li><a href="#">Cras vitae metus aliquam pellentesque pharetra.</a></li>
							<li><a href="#">Duis non ante in metus commodo euismod lobortis.</a></li>
						</ul>
					</section>
				</div>
			</div>
		</div> -->
	<!-- /Footer -->

	<!-- Copyright -->
		<div id="copyright">
			<div class="container">
				&copy; Heavenly Ladder Ministries
			</div>
		</div>


	</body>
</html>