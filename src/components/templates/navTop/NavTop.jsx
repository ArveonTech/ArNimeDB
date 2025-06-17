import { useState, useEffect } from "react";
import BrandName from "../../atoms/navTop/BrandName";
import Bookmark from "../../atoms/navTop/Bookmark";
import NavMd from "./navmd/NavMd";

const NavTop = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Bersihin listener waktu komponen unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={`w-full shadow-md shadow-white z-50 top-0 flex justify-between items-center transition-all duration-300 ease-in-out ${isSticky ? "sticky h-20 p-5 shadow bg-slate-900" : "h-20 px-12 bg-transparent"}`}>
        <BrandName />
        <div className="flex items-center gap-10">
          {windowWidth > 768 && <NavMd />}
          <Bookmark />
        </div>
      </div>
    </>
  );
};

export default NavTop;
