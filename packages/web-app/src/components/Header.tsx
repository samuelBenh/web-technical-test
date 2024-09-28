import logoMobile from "../assets/images/logo-mobile.png";
import logo from "../assets/images/logo-desktop.png";
import { useEffect, useState } from "react";
import Button from "./Button";
import SearchInput from "./SearchInput";
import { Vehicle } from "ws-backend/types/vehicle";

interface HeaderProps {
  vehicles: Vehicle[];
}

const Header = ({ vehicles }: HeaderProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <header className="z-10 relative justify-center sm:top-4 sm:px-6">
      <div className="flex w-full px-2 py-2 justify-between items-center h-[64px] sticky top-4 bg-white sm:rounded-full">
        <div className="flex shrink-0 flex-row items-center h-full">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12"
            src={isMobile ? logoMobile : logo}
            alt="Logo"
          />
          <div className="ml-10 h-full hidden sm:flex gap-3">
            <Button title="Map" isSelected />
            <Button title="Settings" />
          </div>
        </div>
        <SearchInput vehicles={vehicles} />
        <button className="mr-2 sm:hidden text-gray-600">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
