import type { Vehicle } from "../types/vehicle";

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

export const generateBatteryLevel = (previousBatteryLevel?: number) => {
  if (previousBatteryLevel) {
    const battery = previousBatteryLevel + (Math.random() * 5 * (Math.random() < 0.5 ? -1 : 1));

    if (battery < 0) {
      return 0;
    }

    if (battery > 100) {
      return 100;
    }

    return battery;
  }

  return Math.random() * 100;
};