import React, { useEffect, useRef, useState } from 'react';
import './BreweryMap.css';

function BreweryMap({ breweries }) {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);  // New state to hold reference to the map object

    // This function initializes the Google Map
    window.initMap = () => {
        const initializedMap = new window.google.maps.Map(mapRef.current, {
            zoom: 10,
            center: { lat: 40.7128, lng: -74.0060 } // Defaulting to New York for now, you can change this
        });
        setMap(initializedMap);  // Setting the map object once it's initialized
    };

    useEffect(() => {
        fetch('/api/getGoogleMapsScript')
            .then(res => res.text())
            .then((googleMapsScript) => {
                const script = document.createElement('script');
                script.textContent = googleMapsScript;
                document.head.append(script);
            })
            .catch((err) => console.error('Error loading Google Maps script', err));
    }, []);


useEffect(() => {
    if (map && breweries && breweries.length) {
        let latSum = 0;
        let lngSum = 0;
        let validBreweriesCount = 0;

        breweries.forEach(brewery => {
            if (brewery.latitude && brewery.longitude) {
                latSum += parseFloat(brewery.latitude);
                lngSum += parseFloat(brewery.longitude);
                validBreweriesCount++;

                new window.google.maps.Marker({
                    position: { lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude) },
                    map: map,
                    title: brewery.name
                });
            }
        });

        // Calculate average latitude and longitude
        const avgLat = latSum / validBreweriesCount;
        const avgLng = lngSum / validBreweriesCount;

        map.setCenter({ lat: avgLat, lng: avgLng });  // Centering the map
    }
}, [map, breweries]);


    return (
        <div className="tile is-child breweryMapBox">
            <p className="mx-1 p-5 title has-text-centered" id="breweryMap">BREWERY MAP</p>
            <main className="tile is-child image is-16by9 tile" id="mapBox">
                <div ref={mapRef} className="is-child has-ratio width=640 height=360 tile" id="map"></div>
            </main>
        </div>
    );
}

export default BreweryMap;
