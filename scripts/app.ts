export { }

declare const google;

//Initialize and add map
function initMap() : void {
    const slc = { lat: 40.720436, lng: -111.848032 };

    const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
            zoom: 18,
            center: slc,
            disableDefaultUI: true,
        }
    );

    const runCoordinates = [
        { lat: 40.720436, lng: -111.848032 },
        { lat: 40.720440, lng: -111.848100 },
        { lat: 40.720460, lng: -111.848200 },
        { lat: 40.720475, lng: -111.848300 },
    ];

    const run = new google.maps.Polyline({
        path: runCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    run.setMap(map);
}

declare global {
    interface Window {
        initMap: () => void;
    }
}

window.initMap = initMap;