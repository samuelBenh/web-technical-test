import { Vehicle } from "ws-backend/types/vehicle";
import motorIcon from "../../assets/images/motor.png";
import { VehicleStatus } from "../../types/vehicleStatus";

interface MarketMapProps {
  vehicle: Vehicle;
  setVehicleSelected: (vehicle: Vehicle) => void;
  isSelected?: boolean;
}

const MarkerMap = ({
  vehicle,
  isSelected,
  setVehicleSelected,
}: MarketMapProps) => {
  const handleVehicleStatus = (property: string) => {
    switch (vehicle.status) {
      case VehicleStatus.BOOKED:
        return { [property]: "black" };
      case VehicleStatus.AVAILABLE:
        return { [property]: "#F7B328" };
      case VehicleStatus.MAINTENANCE:
        return { [property]: "#E1485C" };
    }
  };

  if (vehicle.status === VehicleStatus.DISABLED) return null;

  if (isSelected) {
    return (
      <div
        style={handleVehicleStatus("backgroundColor")}
        className="flex z-10 justify-center h-8 w-8 rounded-full"
      >
        <div className="flex items-center">
          <img src={motorIcon} alt="vehicle" className="w-6" />
        </div>
        <div
          style={handleVehicleStatus("borderTopColor")}
          className="w-0 h-0 absolute flex items-center -bottom-2 border-l-[7px] border-l-transparent border-t-[12px] border-r-[7px] border-r-transparent"
        />
      </div>
    );
  }

  return (
    <div
      className="flex z-0 justify-center items-center h-[22px] w-[22px] rounded-full"
      style={handleVehicleStatus("backgroundColor")}
      onClick={() => {
        setVehicleSelected(vehicle);
      }}
    >
      <div className="bg-white rounded-full h-[6px] w-[6px]" />
    </div>
  );
};

export default MarkerMap;
