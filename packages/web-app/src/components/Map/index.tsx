import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Vehicle } from "ws-backend/types/vehicle";

interface MapComponentProps {
  vehicles: Vehicle[];
}

const MapComponent = ({ vehicles }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>();

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [2.1734, 41.3851],
      zoom: 12,
    });
  }, []);

  useEffect(() => {
    if (vehicles.length > 0) {
      vehicles.slice(0, 5).forEach((vehicle) => {
        new mapboxgl.Marker()
          .setLngLat([vehicle.lng, vehicle.lat])
          .addTo(map.current!);
      });
    }
  }, [vehicles]);

  return <div ref={mapContainer} className="w-full h-full absolute top-0" />;
};

export default MapComponent;
