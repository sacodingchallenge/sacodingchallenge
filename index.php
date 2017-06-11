<?php
 
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="Keywords" content="coding, programming challenges, practice coding, algorithm, math, puzzles, test you programming skills, networking" /> 
  <meta name="description" content="The San Antonio Coding Challenge is a meetup group that holds a monthly coding competition in San Antonio.">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">
  <title>San Antonio Coding Challenge Home Page</title>
</head>
<body>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-99981600-1', 'auto');
  ga('send', 'pageview');

</script>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="logo">
        	<a href="index.html"><img src="images/sacodingchallenge.png" alt="San Antonio Coding Challenge logo"></a>
        </div>
      </div><!-- navbar-header -->
      <div class="collapse navbar-collapse" id="collapse">
        <ul class="nav navbar-nav navbar-right">
            <li><a href="about.html">{about}</a></li>
            <li><a href="events.html">{events}</a></li>
            <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">sponsors <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="sponsors.html">{sponsors list}</a></li>
                <li><a href="sponsors.html#becomeasponsor">{how to be a sponsor}</a></li>              
              </ul>
            </li>
            <li><a href="howyoucanhelp.html">{how you can help}</a></li>
        	   <li><a href="contact.html"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
            <li><a href="https://www.facebook.com/sacodingchallenge/"><i class="fa fa-lg fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/SA_coding"><i class="fa fa-lg fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/sacodingchallenge/"><i class="fa fa-lg fa-instagram"></i></a></li>
            <li><a href="https://github.com/sacodingchallenge"><i class="fa fa-lg fa-github"></i></a></li>
        </ul>
      </div><!-- collapse navbar-collapse -->
    </div><!-- container -->
  </nav>



				<div id="locations" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#locations" data-slide-to="0" class="active"></li>
						<li data-target="#locations" data-slide-to="1"></li>
						<li data-target="#locations" data-slide-to="2"></li>
						<li data-target="#locations" data-slide-to="3"></li>
						<li data-target="#locations" data-slide-to="4"></li>
						<li data-target="#locations" data-slide-to="5"></li>
						<li data-target="#locations" data-slide-to="6"></li>
						
					</ol>
					<div class="carousel-inner">
						<div class="item active">
							<img src="images/april2017grouppic.jpg" alt="group pic">
						</div>
						
						<div class="item">
							<a href="https://www.meetup.com/San-Antonio-PHP-Meetup/events/239785434/"><img src="images/taco.jpg" alt="Taco Tuesday Event"></a>

						</div>
						<div class="item">
							<a href="https://www.eventbrite.com/e/fusion-cuisine-coding-challenge-tickets-35035986579"><img src="images/june22coding.jpg" alt="Coding Challenge Event"></a>
						</div>
						<div class="item">
							<img src="images/sponsors.png" alt="Thanks to our sponsors">
							
						</div>
						<div class="item">
							<img src="images/cupstacking.jpg" alt="Cup stacking competition">
						</div>
						<div class="item">
							<img src="images/carousel06.jpg" alt="CodeUp and Geekdom">
						</div>
						<div class="item">
							<img src="images/carousel07.jpg" alt="Surfboard group pic">
						</div>
					
					</div>
					<a class="left carousel-control" href="#locations" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left"></span>
					</a>
					<a class="right carousel-control" href="#locations" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right"></span>
					</a>
				</div>
				


<div class="content container">  
    

	<div class="row">
	  	<div class="col-sm-4">
	  		<span class="fa-stack fa-5x">
	  			<i class="fa fa-circle fa-stack-2x"></i>
	  			<i class="fa fa-code fa-stack-1x fa-inverse"></i>
			</span>
			<h2>{code}</h2>
			<p>
				The coding challenge is a monthly event where coders of all levels can compete against each other to solve 5 programming problems of varying complexity in one hour. There are 2 divisions - Novices and Professionals. Any language can be used. Prizes are awarded to the top 3 finishers.
			</p>
	  	</div>
	  	<div class="col-sm-4">
	  		<span class="fa-stack fa-5x">
	  			<i class="fa fa-circle fa-stack-2x"></i>
	  			<i class="fa fa-handshake-o fa-stack-1x fa-inverse"></i>
			</span>
			<h2>{network}</h2>
			<p>There are other activities in addition to the coding challenge. You can network with other professionals by participating in any of the following games
			<ul>
				<li>Human bingo</li>
				<li>Movie trivia</li>
				<li>Cup stacking competition</li>
			</ul>
			</p>
			<p>We also offer a raffle with fun prizes!</p>
	  	</div>
	  	<div class="col-sm-4">
	  		<span class="fa-stack fa-5x">
	  			<i class="fa fa-circle fa-stack-2x"></i>
	  			<i class="fa fa-spoon fa-stack-1x fa-inverse"></i>
			</span>
	  		<h2>{eat}</h2>
	  		<p>Every month, we follow a different food theme. We strive to provide a unique culinary experience by making most of the food from scratch!</p>
	  	</div>
	</div>
  
</div><!-- content container -->

<footer align="center"><img src="images/sacodingchallengesmall.png" alt="San Antonio Coding Challenge logo">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2017 San Antonio Coding Challenge. <i>Powered by Beaver Gorilla Productions</i></footer>
<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/script.js"></script>
<script type="text/javascript" src='/js/meetup.js'></script>
</body>
</html>