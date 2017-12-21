import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

export default class Gmap extends Component{

  render() {
  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
              <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: 52.523720, lng: 13.486234 }}
              >
                {props.isMarkerShown && <Marker position={{ lat: 52.523720, lng: 13.486234 }} /> }
              </GoogleMap>

            ));

  return (
    <div className="App">
      <MyMapComponent
        BicyclingLayer
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `360px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
}
