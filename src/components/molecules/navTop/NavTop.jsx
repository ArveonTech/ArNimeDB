import { useState, useEffect } from "react";
import BrandName from "../../atoms/navTop/BrandName";
import Favorite from "../../atoms/navTop/Favorite";

const NavTop = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Kalau scrollY > 0 berarti sudah turun
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Bersihkan listener pas component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`w-full top-0 flex justify-between items-center shadow-white transition-all duration-300 ease-in-out ${isSticky ? "sticky h-16 p-5 shadow-xs bg-slate-900" : "h-20 px-12 shadow-xs bg-slate-800"}`}>
        <BrandName />
        <Favorite />
      </div>
    </>
  );
};

export default NavTop;
