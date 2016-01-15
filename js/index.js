$(document).ready(function(){
	
google.maps.event.addDomListener(window, 'load', initialize);
});

///create a map function 
function initialize(){
var mapProp = {
    center: new google.maps.LatLng(51.508742,-0.120850),
    zoom:9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
		
};
var map = new google.maps.Map(document.getElementById("map"),mapProp);
};