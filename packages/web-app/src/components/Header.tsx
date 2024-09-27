import logoMobile from "../assets/images/logo-mobile.png";
import logo from "../assets/images/logo-desktop.png";
import { useEffect, useState } from "react";
import Button from "./Button";

const Header = () => {
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
    <header className=" z-10 relative justify-center sm:top-4 sm:px-6">
      <div className="flex w-full px-2 py-2 items-center h-[64px] sticky top-4 bg-white sm:rounded-full">
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
    </header>
  );
};

export default Header;
