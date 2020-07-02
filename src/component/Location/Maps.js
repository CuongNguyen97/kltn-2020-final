import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

export default function App() {
  const [ownPosition, setOwnPosition] = useState({ lat: 10.9056146, lng: 106.8482451 });

  // function initMap() {
  //   var myLatLng = {lat: -25.363, lng: 131.044};
  
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,
  //     center: myLatLng
  //   });
  // }
//   <div class="mapContainer">
//     <a class="direction-link" target="_blank" href="//maps.google.com/maps?f=d&amp;daddr=37.422230,-122.084058&amp;hl=en"> Get Directions</a>
//     <div id="map"></div>
//   </div>

{/* <script>

function initMap() {
  var myLatLng = {{lat: -25.363, lng: 131.044}};

  var map = new google.maps.Map(document.getElementById('map'), {{
    zoom: 4,
    center: myLatLng
  }});

}
</script> */}

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setOwnPosition(pos)
      })
    }
  }, [])

  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={ownPosition}
      defaultZoom={13}
    >
      <Marker position={{ lat: 10.9056146, lng: 106.8482451 }} />
      <Marker position={{ lat: 10.762622, lng: 106.660172 }} />
      <Marker position={{ lat: 11.94646, lng: 108.44193 }} />
      <Marker position={{ lat: 10.34599, lng: 107.08426 }} />

    </GoogleMap>
  ));

  return (
    <div>
      <GoogleMapExample
        containerElement={<div style={{ height: `500px`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

