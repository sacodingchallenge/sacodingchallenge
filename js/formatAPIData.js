const moment = require("moment-timezone");

function formatPhotos(arr) {
  return arr
    .map(function(album) {
      return filterPhotoObj(album);
    })
    .sort(function(a, b) {
      return b.rawTime - a.rawTime;
    });
}

// take in a raw photo album and only return title, thumbnail, time of latest activity, number of photos, and a link to the album
function filterPhotoObj(obj) {
  moment.locale("en");
  const thumbnail = !!obj.album_photo
    ? obj.album_photo.photo_link
    : "http://sacodingchallenge.com/SAlogoBIG.jpg";
  return {
    title: obj.title,
    thumbnail,
    latestActivity: moment(obj.updated)
      .tz("America/Monterrey")
      .format("MMM DD, YYYY"),
    rawTime: obj.updated,
    numberOfPhotos: obj.photo_count,
    link: obj.link
  };
}

function formatEvents(arr) {
  return arr.map(function(event) {
    return takeImportantData(event);
  });
}

// take in a raw event and only return name, url, description, time, and location, and rsvps
function takeImportantData(obj) {
  moment.locale("en");
  return {
    name: obj.name,
    url: obj.event_url,
    description: obj.description,
    time: moment(obj.time)
      .tz("America/Monterrey")
      .format("ddd, MMM DD, YYYY h:mma"),
    venue: obj.venue.name.substring(0, obj.venue.name.length),
    address: obj.venue.address_1,
    city: obj.venue.city,
    state: obj.venue.state,
    rsvps: obj.yes_rsvp_count
  };
}

module.exports = {
  formatPhotos,
  formatEvents
};
