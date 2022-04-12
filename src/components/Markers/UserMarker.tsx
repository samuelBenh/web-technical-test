import React from 'react';
import { Marker } from '@react-google-maps/api';
import userLocation from '../../images/userlocation.png';

const scale = [15, 15];

interface UserMarkerProps {
  location: google.maps.LatLng
}

const UserMarker: React.FC<UserMarkerProps> = React.memo((props) => (
  <Marker
    position={props.location}
    icon={{
      url: userLocation,
      scaledSize: new window.google.maps.Size(scale[0], scale[1]),
    }}
  />
));

export default UserMarker;
