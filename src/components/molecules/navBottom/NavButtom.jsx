import Icons from "../../atoms/navBottom/icons";
import { useLocation } from "react-router-dom";

const NavButtom = () => {
  const location = useLocation();
  const iconList = [
    { path: "/", icon: "icons/home.png" },
    { path: "/explore", icon: "icons/explore.png" },
    { path: "/topAnime", icon: "icons/topAnime.png" },
    { path: "/genres", icon: "icons/genres.png" },
  ];

  return (
    <div className="absolute w-full bottom-0 rounded-t-3xl py-5 flex justify-around bg-slate-900">
      {iconList.map(({ path, icon }, index) => (
        <Icons key={index} image={icon} to={path} active={location.pathname === path} />
      ))}
    </div>
  );
};

export default NavButtom;
