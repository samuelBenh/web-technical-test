import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "ws-backend/types/socket";
import { Vehicle } from "ws-backend/types/vehicle";
import Header from "./components/Header";
import MapComponent from "../src/components/Map";
import VehicleDetails from "./components/VehicleDetails";

function App() {
  const [vehicleSelected, setVehicleSelected] = useState<Vehicle | null>(null);

  const socketClient = useRef(
    io("http://localhost:3000", {
      autoConnect: false,
    }) as Socket<ServerToClientEvents, ClientToServerEvents>
  );

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const socket = socketClient.current;

    socket?.on("vehicle", (vehicle) => {
      // Feel free to change the data structure to fit your needs.
      setVehicles((prevVehicles) => {
        const vehicleIndex = prevVehicles.findIndex((v) => v.id === vehicle.id);

        if (vehicleIndex !== -1) {
          return [
            ...prevVehicles.slice(0, vehicleIndex),
            vehicle,
            ...prevVehicles.slice(vehicleIndex + 1),
          ];
        }

        return [...prevVehicles, vehicle];
      });
    });

    socket?.on("vehicles", (vehicles) => {
      setVehicles(vehicles);
    });

    socket?.connect();

    return () => {
      socket?.off("vehicle");
      socket?.disconnect();
    };
  }, []);

  return (
    <div className="bg-slate-200 z-10 h-screen">
      <Header />
      <MapComponent
        vehicles={vehicles}
        vehicleSelected={vehicleSelected}
        setVehicleSelected={setVehicleSelected}
      />
      <VehicleDetails vehicle={vehicleSelected} />
    </div>
  );
}

export default App;
