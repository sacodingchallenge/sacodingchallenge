const moment = require('moment-timezone');

function getPhotosArr(arr) {
	return arr.map(function(album){
		return filterPhotoObj(album);
	});
}

// take in a raw photo album and only return title, thumbnail, time of latest activity, number of photos, and a link to the album
function filterPhotoObj(obj){
	moment.locale('en');
	return {
		title: obj.title,
		thumbnail: obj.album_photo.photo_link,
		latestActivity: moment(obj.updated).tz("America/Monterrey").format("MMM DD, YYYY"),
		numberOfPhotos: obj.photo_count,
		link: obj.link,
	};
}

module.exports = getPhotosArr;