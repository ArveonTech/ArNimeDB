import { useEffect, useState } from "react";
import Icons from "../../atoms/navBottom/Iconscons";
import { useLocation } from "react-router-dom";

const NavButtom = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Bersihin listener waktu komponen unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();
  const iconList = [
    { path: "/", icon: "icons/home.png", name: "Home" },
    { path: "/explore", icon: "icons/explore.png", name: "Explore" },
    { path: "/genres", icon: "icons/genres.png", name: "Genres" },
    { path: "/recommended", icon: "icons/recommended.png", name: "Star" },
  ];

  return (
    <>
      {windowWidth < 768 && (
        <div className="fixed  z-20 w-full bottom-0 rounded-t-3xl py-5 flex justify-around bg-slate-900">
          {iconList.map(({ path, icon, name }, index) => (
            <Icons key={index} image={icon} to={path} name={name} active={location.pathname === path} />
          ))}
        </div>
      )}
    </>
  );
};

export default NavButtom;
