import scooter from "../../assets/images/scooter.png";

const VehiculeDetails = () => {
  return (
    <div className="sm:h-auto h-full bg-transparent z-10 sm:relative">
      <div className="absolute flex flex-col bottom-0 sm:top-9  sm:ml-9 h-[200px] rounded-t-lg sm:rounded-lg w-full sm:w-[350px] sm:p-3 bg-bg_secondary">
        <div className="flex flex-col bg-white border-b border-[#DCE0E6] rounded-t-lg">
          <div className="flex flex-row p-4">
            <img src={scooter} alt="vehicule" className="w-[72px]" />
            <div className="ml-4">
              <p className="font-semibold text-text-primary">Maité</p>
              <div className="rounded-full mt-1 px-2 text-[#17B26A] bg-[#ECFDF3]">
                <p className="capitalize">{"AVAILABLE".toLowerCase()}</p>
              </div>
            </div>
          </div>
          {/* <LabelStatus status="AVAILABLE" /> */}
        </div>
        <div className="flex flex-row sm:flex-col bg-white rounded-b-lg p-3 h-full">
          <p className="flex-1 text-text-primary">
            Plate: <span className="font-semibold">AAAZAZA</span>
          </p>
          <p className="flex-1 text-text-primary">
            Battery: <span className="font-semibold">12%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VehiculeDetails;
