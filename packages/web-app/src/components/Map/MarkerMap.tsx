import { Vehicle } from "ws-backend/types/vehicle";

interface MarketMapProps {
  vehicle: Vehicle;
  isSelected?: boolean;
}

const MarkerMap = ({ vehicle, isSelected = false }: MarketMapProps) => {
  const handleVehicleStatus = () => {
    switch (vehicle.status) {
      case "BOOKED":
        return { backgroundColor: "black" };
      case "AVAILABLE":
        return { backgroundColor: "#F7B328" };
      case "MAINTENANCE":
        return { backgroundColor: "#E1485C" };
    }
  };

  if (vehicle.status === "DISABLED") return null;

  return (
    <div
      className="flex justify-center items-center h-[22px] w-[22px] rounded-full"
      style={handleVehicleStatus()}
      onClick={() =>
        alert(`Scooter ID: ${vehicle.id}, Status: ${vehicle.status}`)
      }
    >
      <div className="bg-white rounded-full h-[6px] w-[6px]"></div>
    </div>
  );
};

export default MarkerMap;
