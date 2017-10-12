const moment = require('moment-timezone');

function findNextEvents(arr) {
	return arr.map(function(event){
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
		time: moment(obj.time).tz("America/Monterrey").format("ddd, MMM DD, YYYY h:mma"),
		venue: obj.venue.name.substring(0, obj.venue.name.length),
		address: obj.venue.address_1,
		city: obj.venue.city,
		state: obj.venue.state,
		rsvps: obj.yes_rsvp_count
	};
}

module.exports = findNextEvents;