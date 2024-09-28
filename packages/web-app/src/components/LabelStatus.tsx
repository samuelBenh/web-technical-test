import { VehicleStatus } from "../types/vehicleStatus";

interface LabelStatusProps {
  status: VehicleStatus;
  isSmall?: boolean;
}

const LabelStatus = ({ status, isSmall = false }: LabelStatusProps) => {
  const handleVehicleLabel = () => {
    switch (status) {
      case VehicleStatus.BOOKED:
        return { backgroundColor: "#F2F4F7", color: "#475467" };
      case VehicleStatus.AVAILABLE:
        return { backgroundColor: "#ECFDF3", color: "#17B26A" };
      case VehicleStatus.MAINTENANCE:
        return { backgroundColor: "#FEF3F2", color: "#F04438" };
    }
  };

  return (
    <div style={handleVehicleLabel()} className="rounded-full mt-1 px-2">
      <p className={`capitalize text-center ${isSmall ? "text-xs" : ""}`}>
        {status.toLowerCase()}
      </p>
    </div>
  );
};

export default LabelStatus;
