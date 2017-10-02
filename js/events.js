var dataObj = {};

function getData() {
	$(document).ready(function() {
		var url = "https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=San-Antonio-PHP-Meetup&status=upcoming&page=8";
		$.ajax({
			url: url,
			success: function(result) {
				dataObj = findNextCodingChallenge(result.results);
				console.log(dataObj.url);
				updateDOM();
			}
		});
	});
}

function findNextCodingChallenge(obj) {
	for (var i = 0; i < obj.length; i++) {
		var name = obj[i].name;
		if (/Coding/ig.test(name)) {
			return takeImportantData(obj[i]);
		}
	}
}

// events
// can't tell if events page is dynamically pulling stuff in - i don't think so, it still lists the meetup from the 28th
// LINK TO MEETUP TO ADD IT TO CALENDAR THERE
// why eventbrite AND Facebook AND Meetup? more exposure?
// dont you have to manually change those eventbrite links though?
// dont have the flyer, that sounds like a pain in the ass

// do the events api
// search through each object, in the name, until you see 'coding challenge' - use the first one

// title - use the api's
// calendar icon Thu, September 28, 2017, [6:30 PM – 9:30 PM CDT hardcoded]
// description - use the api's
// location icon, name [i.e. Codeup], address, city, state
	// Codeup, 600 N Navarro, San Antonio, TX 78205
// meetup button - linked to the event url

// make an object with the stuff you want
// takes the big api response obj, returns only what you want

// {
// 	"utc_offset": -18000000,
// 	"venue": {
// 		"country": "us",
// 		"localized_country_name": "USA",
// 		"city": "San Antonio",
// 		"address_1": "131 Soledad Street",
// 		"name": "Geekdom Event Center ",
// 		"lon": -98.49324,
// 		"id": 24092191,
// 		"state": "TX",
// 		"lat": 29.425919,
// 		"repinned": false
// 	},
// 	"headcount": 0,
// 	"visibility": "public",
// 	"waitlist_count": 0,
// 	"created": 1503658103000,
// 	"maybe_rsvp_count": 0,
// 	"description": "<p>There will be 3-5 fun challenges (of varying complexity) with points awarded for the completion of each one. Highest score wins. Prizes will be awarded to 1st, 2nd and 3rd place winners. There will be 2 divisions - Students and Professionals.</p> <p>We will be at the Event Center. </p>",
// 	"event_url": "https://www.meetup.com/San-Antonio-PHP-Meetup/events/242820588/",
// 	"yes_rsvp_count": 3,
// 	"name": "2nd Annual Halloween Coding Challenge",
// 	"id": "lnwtllywnbzb",
// 	"time": 1508887800000,
// 	"updated": 1503658103000,
// 	"group": {
// 		"join_mode": "open",
// 		"created": 1433281863000,
// 		"name": "San Antonio Coding Challenge",
// 		"group_lon": -98.52999877929688,
// 		"id": 18644645,
// 		"urlname": "San-Antonio-PHP-Meetup",
// 		"group_lat": 29.469999313354492,
// 		"who": "Coders"
// 	},
// 	"status": "upcoming"
// }
function takeImportantData(obj){
	return {
		name: obj.name,
		url: obj.event_url,
		description: obj.description,
		time: new Date(obj.time).toDateString(),
		location: obj.venue.name.substring(0, obj.venue.name.length - 1) + '</br>' + obj.venue.address_1 + '</br>' + obj.venue.city + ', ' + obj.venue.state
	};
}

function updateDOM(){
	$('#eventName').text(dataObj.name);
	$('#eventTime').html('<p><i class="fa fa-lg fa-calendar"></i></p><p>' + dataObj.time + '</p><p>6:30 PM – 9:30 PM CDT</p>');
	$('#eventDescription').html(dataObj.description);
	$('#eventLocation').html('<i class="fa fa-lg fa-map-marker"></i></br>' + dataObj.location);
	$('#eventURL').attr('href', dataObj.url);
}

getData();