var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 53.581432, lng: 27.737403},
		zoom: 5,
      	disableDefaultUI: true
    });
};