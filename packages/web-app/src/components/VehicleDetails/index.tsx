import { Vehicle } from "ws-backend/types/vehicle";
import scooter from "../../assets/images/scooter.png";
import LabelStatus from "../LabelStatus";
import { VehicleStatus } from "../../types/vehicleStatus";

interface VehicleDetailsProps {
  vehicle: Vehicle | null;
}

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) => {
  if (!vehicle) return null;

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
                <LabelStatus status={vehicle.status as VehicleStatus} />
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
