const express = require('express');
const ejs = require('ejs');
const request = require('request');
const moment = require('moment-timezone');

const findNextEvents = require('./js/nextEvent.js');
const getPhotosArr = require('./js/getPhotos.js');

// ===============================================================

getEventData();

function getEventData() {

	request({
		url: "https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=San-Antonio-PHP-Meetup&status=upcoming&page=50",
		json: true
	}, function(error, response, body) {

		if (!error && response.statusCode === 200) {
			var data = findNextEvents(body.results);
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

getPhotos();

// kinda a duplicate
// only difference is url, file name, format function
// maybe make a function and call it twice with each of these?
function getPhotos() {

	request({
		url: "https://api.meetup.com/2/photo_albums?&sign=true&photo-host=public&group_id=18644645&page=20",
		json: true
	}, function(error, response, body) {

		if (!error && response.statusCode === 200) {
			
			var photos = getPhotosArr(body.results);

			app.get('/photos', (req, res) => {
				res.render('photos.ejs', {photos: photos});
			});
		} else {
			console.log('Unable to fetch data.');
		}

	});

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

// make a api call to 
// https://api.meetup.com/2/photo_albums?&sign=true&photo-host=public&group_id=18644645&page=20
// use photo_album_id to make another call to 
// https://api.meetup.com/2/photos?&sign=true&photo-host=public&photo_album_id=28111592&page=20
// which will give you all of the photos in the album.