const express = require('express');
const ejs = require('ejs');
const request = require('request');
const moment = require('moment-timezone');

// ===============================================================

getData();

function getData() {

	request({
		url: "https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=San-Antonio-PHP-Meetup&status=upcoming&page=8",
		json: true
	}, function(error, response, body) {

		if (!error && response.statusCode === 200) {
			var data = findNextCodingChallenges(body.results);
			// figure out a better way to do this
			// problem is the api call is async, and so when you try to pass it in it won't work
			// app.get('/events') should be with the other app.get's down below
			// promises?
			app.get('/events', (req, res) => {
				res.render('events.ejs', {data: data});
			});
		} else {
			console.log('Unable to fetch data.');
		}

	});

}

function findNextCodingChallenges(obj) {
	return obj.filter(function(event){
		return /coding/ig.test(event.name);
	}).map(function(event){
		return takeImportantData(event);
	});

}

// take in a raw event and only return name, url, description, time, and location, and rsvps
function takeImportantData(obj){
	moment.locale('en');
	return {
		name: obj.name,
		url: obj.event_url,
		description: obj.description,
		time: moment(obj.time).tz("America/Monterrey").format("ddd, MMM DD, YYYY"),
		venue: obj.venue.name.substring(0, obj.venue.name.length - 1),
		address: obj.venue.address_1,
		city: obj.venue.city,
		state: obj.venue.state,
		rsvps: obj.yes_rsvp_count
	};
}

// ===============================================================

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/font-awesome-4.7.0'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/lib'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/sponsors', (req, res) => {
	res.render('sponsors');
});

app.get('/help', (req, res) => {
	res.render('help');
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});


// { name: '2nd Annual Halloween Coding Challenge',
//   url: 'https://www.meetup.com/San-Antonio-PHP-Meetup/events/242820588/',
//   description: '<p>There will be 3-5 fun challenges (of varying complexity) with points awarded for the completion of each one. Highest score wins. Prizes will be awarded to 1st, 2nd and 3rd place winners. There will be 2 divisions - Students and Professionals.</p> <p>We will be at the Event Center. </p>',
//   time: 'Tue Oct 24 2017',
//   venue: 'Geekdom Event Center',
//   address: '131 Soledad Street',
//   city: 'San Antonio',
//   state: 'TX' }