<?php
	/*
		TO-DO:
		- Something is up with the datetime conversion. I have no clue what day it actually is, but somehow the events are being returned in sequential order...
	*/
?>
  
  <div class="row"> 
    <div class="col-sm-12"> 
      <h3><?= $_POST["name"]?></h3>
    </div>
  </div>  
  <div class="row"> 
    <div class="col-sm-8"> 
      <h4>description</h4>
      <?=$_POST["description"]?>
      <a href="<?=$_POST["link"]?>" class="btn btn-default">RSVP and Read More on Meetup!</a>
      <!--<a href="downloads/2017-05-26CodingChallenge.pdf"><i class="fa fa-download" aria-hidden="true"></i> download flyer</a>-->
  
    </div>
    <div class="col-sm-4"> 
      <i class="fa fa-calendar" aria-hidden="true"></i>
      <p><?=date("D, F jS Y",(int)$_POST["updated"]+(int)$_POST["utc_offset"])?><br/>
      	 <?=date("g:i A",(int)$_POST["updated"]+(int)$_POST["utc_offset"])?>
      </p>
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      <p><?=$_POST["name"]?><br/>
         <?=$_POST["address_1"]?><br/>
        <?=$_POST["city"]?>, <?=$_POST["state"]?> <?=$_POST["zip"]?>
      </p>
    </div>
  </div>     
