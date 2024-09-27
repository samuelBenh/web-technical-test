import { Vehicle } from "ws-backend/types/vehicle";
import scooter from "../../assets/images/scooter.png";

interface VehicleDetailsProps {
  vehicle: Vehicle | null;
}

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) => {
  if (!vehicle) return null;

  const handleVehicleLabel = () => {
    switch (vehicle.status) {
      case "BOOKED":
        return { backgroundColor: "#F2F4F7", color: "#475467" };
      case "AVAILABLE":
        return { backgroundColor: "#ECFDF3", color: "#17B26A" };
      case "MAINTENANCE":
        return { backgroundColor: "#FEF3F2", color: "#F04438" };
    }
  };

  return (
    <div className={`sm:h-auto h-full bg-transparent z-10 sm:relative`}>
      <div className="absolute flex flex-col bottom-0 sm:top-9  sm:ml-9 rounded-t-lg sm:rounded-lg w-full sm:w-[350px] h-[140px] sm:h-[180px] sm:p-3 bg-bg_secondary">
        <div className="flex flex-col bg-white border-b border-[#DCE0E6] rounded-t-lg">
          <div className="flex flex-row p-4">
            <img src={scooter} alt="vehicule" className="w-[72px]" />
            <div className="ml-4">
              <p className="font-semibold capitalize text-text-primary">
                {vehicle.name}
              </p>
              <div className="flex">
                <div
                  style={handleVehicleLabel()}
                  className="rounded-full mt-1 px-2"
                >
                  <p className="capitalize text-center">
                    {vehicle.status.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col bg-white rounded-b-lg p-3 h-full">
          <p className="flex-1 text-text-primary">
            Plate:{" "}
            <span className="font-semibold uppercase">
              {vehicle.plate_number}
            </span>
          </p>
          <p className="flex-1 text-text-primary">
            Battery:{" "}
            <span className="font-semibold">{vehicle.battery.toFixed(1)}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
