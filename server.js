const express = require('express');
const ejs = require('ejs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/font-awesome-4.7.0'));
app.use(express.static(__dirname + '/lib'));

// app.set("views", "views");

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/events', (req, res) => {
	res.render('events', {});
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