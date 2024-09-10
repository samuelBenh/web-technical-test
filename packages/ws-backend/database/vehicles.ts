import type { Vehicle } from "../types/vehicle";
import { generateVehiclePlateNumber, getRandomPosition, getRandomStatus } from "../libs/vehicle";

/**
 * Generates random vehicles to simulate a real world scenario.
 * Serves as a mock database.
 */
export const vehicles: Vehicle[] = Array(350).fill(null).map((_, index) => {
  const position = getRandomPosition();

  return {
    id: index,
    plate_number: generateVehiclePlateNumber(),
    lat: position[1],
    lng: position[0],
    battery: Math.random() * 100,
    status: getRandomStatus(),
  }
});
