import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -6.2440483, 
  lng: 106.6173118
};

const MyMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {/* Komponen peta dan marker */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMapComponent;
