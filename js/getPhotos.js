const moment = require('moment-timezone');

function getPhotosArr(arr) {
	return arr.map(function(album){
		return filterPhotoObj(album);
	}).sort(function(a, b){
		return b.rawTime - a.rawTime;
	});
}

// take in a raw photo album and only return title, thumbnail, time of latest activity, number of photos, and a link to the album
function filterPhotoObj(obj){
	moment.locale('en');
	const thumbnail = !!obj.album_photo ? obj.album_photo.photo_link : "http://sacodingchallenge.com/SAlogoBIG.jpg";
	return {
		title: obj.title,
		thumbnail,
		latestActivity: moment(obj.updated).tz("America/Monterrey").format("MMM DD, YYYY"),
		rawTime: obj.updated,
		numberOfPhotos: obj.photo_count,
		link: obj.link
	};
}

module.exports = getPhotosArr;