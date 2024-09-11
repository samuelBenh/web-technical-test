import { useEffect, useRef, useState } from "react"
import { io, Socket } from "socket.io-client"
import { ClientToServerEvents, ServerToClientEvents  } from "ws-backend/types/socket"
import { Vehicle } from "ws-backend/types/vehicle";

function App() {
  const socketClient = useRef(io('http://localhost:3000', {
    autoConnect: false,
  }) as Socket<ServerToClientEvents, ClientToServerEvents>);

  const [counter, setCounter] = useState(0);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const socket = socketClient.current;

    socket?.on('vehicle', (vehicle) => {
      // Update the state
      setCounter((prevCount) => prevCount + 1);
      console.log(vehicle);
    });

    socket?.on('vehicles', (vehicles) => {
      setVehicles(vehicles);
    });

    socket?.connect();

    return () => {
      socket?.off('vehicle');
      socket?.disconnect();
    }
  }, []);

  return <div>
    <h1>Yego Tiny</h1>
    <p>Updates received: {counter}</p>
    <ul>
      {vehicles.map((vehicle) => (
        <li key={vehicle.id}>{vehicle.plate_number}</li>
      ))}
    </ul>
  </div>
}

export default App
