import Icons from "../../../atoms/navBottom/Icons";
import { useLocation } from "react-router-dom";

const NavMd = () => {
  const location = useLocation();
  const iconList = [
    { path: "/", icon: "icons/home.png" },
    { path: "/explore", icon: "icons/explore.png" },
    { path: "/genres", icon: "icons/genres.png" },
    { path: "/recommended", icon: "icons/recommended.png" },
  ];

  return (
    <div className="rounded-t-3xl py-5 flex gap-10 justify-around bg-transparent">
      {iconList.map(({ path, icon }, index) => (
        <Icons key={index} image={icon} to={path} active={location.pathname === path} />
      ))}
    </div>
  );
};

export default NavMd;
