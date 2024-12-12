import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl'; // Import ReactMapGL and Marker from react-map-gl
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox's CSS
import { Popup } from 'mapbox-gl';

const MapComponent = ({ location }) => {
    const [viewport, setViewport] = React.useState({
        latitude: location.lat, // Set initial latitude from profile data
        longitude: location.lng, // Set initial longitude from profile data
        zoom: 12, // Set initial zoom level
        width: '100%', // Full width for the map
        height: '400px', // Set height for the map container
    });

    return (
        <ReactMapGL
            {...viewport} // Spread the state for the viewport
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} // Use your Mapbox token here
            onViewportChange={(nextViewport) => setViewport(nextViewport)} // Update the viewport on interaction
        >
            {/* Add Marker at the profile's location */}
            <Marker latitude={location.lat} longitude={location.lng}>
                <div style={{ backgroundColor: 'red', padding: '10px', borderRadius: '50%' }}>
                    📍 {/* Custom icon or emoji as marker */}
                    <Popup>
                    <h3>{location.name}</h3>
                    <p>{location.description}</p>
                    </Popup>
                </div>
            </Marker>
        </ReactMapGL>
    );
};

export default MapComponent;


// import React from 'react';
// import ReactMapGL, { Marker } from 'react-map-gl';

// const MapComponent = ({ location }) => {
//     const [viewport, setViewport] = React.useState({
//         latitude: location.lat,
//         longitude: location.lng,
//         zoom: 10,
//         width: '100%',
//         height: '400px',
//     });

//     return (
//         <ReactMapGL
//             {...viewport}
//             mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//             onViewportChange={(nextViewport) => setViewport(nextViewport)}
//         >
//             <Marker latitude={location.lat} longitude={location.lng}>
//                 <div>📍</div>
//             </Marker>
//         </ReactMapGL>
//     );
// };

// export default MapComponent;
