import { Link } from "react-router-dom";

const Icons = ({ image, to, active, name }) => {
  return (
    <Link to={to}>
      <img src={image} alt="icon" className={`h-8 aspect-square transition duration-200 mx-auto mb-2 ${active ? "drop-shadow-lg drop-shadow-cyan-200" : ""}`} />
      <p className="text-white ">{name}</p>
    </Link>
  );
};

export default Icons;
