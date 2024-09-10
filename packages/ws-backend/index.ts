import { Server } from 'socket.io';
import type { ClientToServerEvents, ServerToClientEvents } from './types/socket';
import { getRandomPosition, getRandomStatus } from './libs/vehicle';
import { getAllVehicles, updateVehicle } from './services/vehicles';

const server = new Server<ClientToServerEvents, ServerToClientEvents>({
  cors: {
    origin: 'http://localhost:5173',
  }
});

server.on('connection', (socket) => {
  console.log('A client connected');

  socket.emit('vehicles', getAllVehicles());

  socket.on('vehicle', (vehicle) => {
    updateVehicle(vehicle.id, vehicle);
  });

  /**
   * Simulates real world scenario by updating one vehicle every 150ms.
   * It will update atrtibutes except the id and plate_number.
   */
  setInterval(() => {
    const vehicle = getAllVehicles().at(Math.floor(Math.random() * getAllVehicles().length));

    if (vehicle) {
      const position = getRandomPosition();

      vehicle.lat = position[1];
      vehicle.lng = position[0];
      vehicle.status = getRandomStatus();
      vehicle.battery = Math.random() * 100;

      socket.emit('vehicle', vehicle);
    }
  }, 150);

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

server.listen(3000);