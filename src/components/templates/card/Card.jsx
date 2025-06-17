import { Link } from "react-router-dom";

const Card = ({ data, i, handleClick }) => {
  return (
    <div className="w-full h-24 rounded-2xl overflow-hidden flex md:w-full lg:w-[600px]" key={i}>
      <Link to={`/detail/${data.mal_id}`}>
        <img src={data.images.jpg.large_image_url} alt={`image-${i}`} className="w-30 lg:w-60 object-cover" />
      </Link>
      <div className="flex justify-between bg-slate-600 w-full">
        <div className="ml-2 flex flex-col justify-center py-3.5 md:justify-between">
          <Link to={`/detail/${data.mal_id}`}>
            <h2>{data.title}</h2>
          </Link>
          <p className="hidden md:block">{data.genres.map((g) => g.name).join(", ")}</p>
        </div>

        <div className="flex items-center flex-col justify-around">
          <button className="bg-red-500 rounded mr-5 w-24 p-1" onClick={(e) => handleClick(data.mal_id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
