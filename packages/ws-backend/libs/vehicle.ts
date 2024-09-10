import { randomPosition } from "@turf/turf";
import type { Vehicle } from "../types/vehicle";
import { barcelonaBBox } from "./position";

/**
 * Generate a random vehicle plate number
 */
export const generateVehiclePlateNumber = () => (Math.random() + 1).toString(36).substring(7);

export const getRandomStatus = (): Vehicle['status'] => {
  const random = Math.random();

  if (random > 0.95) {
    return 'DISABLED';
  }

  if (random > 0.85) {
    return 'MAINTENANCE';
  }

  if (random > 0.1) {
    return 'AVAILABLE';
  }

  return 'BOOKED';
}

export const getRandomPosition = () => randomPosition(barcelonaBBox);