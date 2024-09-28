import { useState } from "react";
import { Vehicle } from "ws-backend/types/vehicle";
import LabelStatus from "./LabelStatus";
import { VehicleStatus } from "../types/vehicleStatus";

interface SearchInputProps {
  vehicles: Vehicle[];
}

const SearchInput = ({ vehicles }: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[] | null>(
    null
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toUpperCase();
    setSearchQuery(query);

    if (!query) {
      setFilteredVehicles(null);
      return;
    }

    const filtered = vehicles
      .filter((vehicle) => vehicle.plate_number.toUpperCase().includes(query))
      .slice(0, 5);
    setFilteredVehicles(filtered);
  };

  return (
    <div className="relative z-10 sm:ml-2 h-full w-full px-5 sm:p-0 sm:w-1/3">
      <input
        value={searchQuery}
        onChange={handleSearch}
        className="relative rounded-full text-text-primary border h-full px-4 w-full"
        placeholder="Plate Number"
      />
      {filteredVehicles && filteredVehicles.length > 0 && (
        <div className="absolute right-0 -bottom-13 w-full bg-white rounded-lg">
          {filteredVehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`flex items-center p-3 ${
                index === filteredVehicles.length - 1
                  ? ""
                  : "border-b border-[#DCE0E6]"
              }`}
            >
              <div className=" flex flex-col flex-1">
                <p className="text-text-primary text-sm font-medium capitalize whitespace-nowrap">
                  {vehicle.name}
                </p>
                <p className="text-text-primary flex-1 text-xs uppercase">
                  {vehicle.plate_number}
                </p>
              </div>
              <LabelStatus status={vehicle.status as VehicleStatus} isSmall />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
