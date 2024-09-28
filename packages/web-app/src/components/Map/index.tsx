import { useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Layer, MapRef, Marker, Source } from "react-map-gl";
import { Vehicle } from "ws-backend/types/vehicle";
import restrictedZones from "../../assets/zones/barcelona.json";
import MarkerMap from "./MarkerMap";

const MAPBOX_TOKEN = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN;
interface MapComponentProps {
  vehicles: Vehicle[];
  vehicleSelected: Vehicle | null;
  setVehicleSelected: (vehicle: Vehicle) => void;
}

const MapComponent = ({
  vehicles,
  setVehicleSelected,
  vehicleSelected,
}: MapComponentProps) => {
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
        <Source id="restricted-zones" type="geojson" data={restrictedZones}>
          <Layer
            id="restricted-zones"
            type="fill"
            source="restricted-zones"
            paint={{
              "fill-color": "#475467",
              "fill-opacity": 0.3,
            }}
          />
        </Source>
        {vehicles.slice(0, 30).map((vehicle) => {
          return (
            <Marker
              key={vehicle.id}
              longitude={vehicle.lng}
              latitude={vehicle.lat}
              anchor="bottom"
            >
              <MarkerMap
                isSelected={vehicleSelected === vehicle}
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
