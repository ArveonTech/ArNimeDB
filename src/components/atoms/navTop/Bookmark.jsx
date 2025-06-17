import { Link } from "react-router-dom";

const Bookmark = () => {
  return (
    <div>
      <Link to="/bookmark">
        <img src="icons/bookmark.png" alt="favorite icon" className="h-8 mt-1 w-10 cursor-pointer" />
      </Link>
    </div>
  );
};

export default Bookmark;
