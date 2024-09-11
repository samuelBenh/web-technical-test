import type { Vehicle } from "../types/vehicle";
import { vehicles } from "../database/vehicles";

export const getAllVehicles = () => vehicles;

export const getVehicleById = (id: number) => {
  return vehicles.find((vehicle) => vehicle.id === id);
};

export const addVehicle = (vehicle: Vehicle) => {
  vehicles.push(vehicle);
};

export const updateVehicle = (id: number, vehicle: Omit<Vehicle, 'id' | 'plate_number'>) => {
  const index = vehicles.findIndex((v) => v.id === id);

  if (index !== -1) {
    vehicles[index] = {
      ...vehicles[index],
      ...vehicle,
    };

    return vehicles[index];
  }

  return undefined;
};

export const removeVehicle = (id: number) => {
  const index = vehicles.findIndex((v) => v.id === id);

  if (index !== -1) {
    vehicles.splice(index, 1);

    return true;
  }

  return false;
};