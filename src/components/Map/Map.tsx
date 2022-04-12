import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 41.397669,
  lng: 2.176236,
};

const Map: React.FC = () => (
  <LoadScript
    googleMapsApiKey="Your Google API key here"
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
    />
  </LoadScript>
);

export default Map;
