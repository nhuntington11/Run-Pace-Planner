"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Initialize and add map
function initMap() {
    var slc = { lat: 40.720436, lng: -111.848032 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: slc,
        disableDefaultUI: true,
    });
    var runCoordinates = [
        { lat: 40.720436, lng: -111.848032 },
        { lat: 40.720440, lng: -111.848100 },
        { lat: 40.720460, lng: -111.848200 },
        { lat: 40.720475, lng: -111.848300 },
    ];
    var run = new google.maps.Polyline({
        path: runCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    run.setMap(map);
}
window.initMap = initMap;
//# sourceMappingURL=app.js.map