import { Link } from "react-router-dom";

const Icons = ({ image, to, active }) => {
  return (
    <Link to={to}>
      <img src={image} alt="icon" className={`h-8 aspect-square transition duration-200  ${active ? "drop-shadow-lg drop-shadow-cyan-200" : ""}`} />
    </Link>
  );
};

export default Icons;
