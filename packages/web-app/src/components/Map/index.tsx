import { useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { MapRef, Marker } from "react-map-gl";
import { Vehicle } from "ws-backend/types/vehicle";
import MarkerMap from "./MarkerMap";

const MAPBOX_TOKEN = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN;
interface MapComponentProps {
  vehicles: Vehicle[];
  setVehicleSelected: (vehicle: Vehicle) => void;
}

const MapComponent = ({ vehicles, setVehicleSelected }: MapComponentProps) => {
  const map = useRef<MapRef | null>(null);

  return (
    <div className="absolute z-2 top-0 w-full h-full">
      <Map
        ref={map}
        initialViewState={{
          longitude: 2.1734,
          latitude: 41.3851,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {vehicles.slice(0, 30).map((vehicle) => {
          return (
            <Marker
              key={vehicle.id}
              longitude={vehicle.lng}
              latitude={vehicle.lat}
              anchor="bottom"
            >
              <MarkerMap
                setVehicleSelected={setVehicleSelected}
                vehicle={vehicle}
              />
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default MapComponent;
