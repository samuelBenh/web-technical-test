import React, { useMemo } from 'react';
import { Marker } from '@react-google-maps/api';

import { Vehicle, VehicleStatus } from '../../types/vehicles';
import markerOrange from '../../images/icon_scooter_orange.png';
import markerBlack from '../../images/icon_scooter_black.png';
import markerRed from '../../images/icon_scooter_red.png';

const scale = [33, 46];

interface VehicleMarkerProps {
  vehicle: Vehicle;
}

const VehicleMarker: React.FC<VehicleMarkerProps> = React.memo((props) => {
  const markerImage = useMemo(() => {
    switch (props.vehicle.status) {
      case VehicleStatus.AVAILABLE:
        return markerOrange;

      case VehicleStatus.BOOKED:
        return markerBlack;

      default:
        return markerRed;
    }
  }, [props.vehicle]);

  if (!props.vehicle) {
    return null;
  }
  return (
    <Marker
      position={props.vehicle}
      icon={{
        url: markerImage,
        scaledSize: new window.google.maps.Size(scale[0], scale[1]),
      }}
    />
  );
});

export default VehicleMarker;
