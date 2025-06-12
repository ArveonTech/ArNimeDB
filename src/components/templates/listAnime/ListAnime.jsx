import { Link } from "react-router-dom";

const ListAnime = ({ data, i }) => {
  return (
    data && (
      <div>
        <Link to={`/detail/${data.mal_id}`}>
          <div className="bg-white rounded-xl shadow-md overflow-hidden relative w-36 h-48 group cursor-pointer">
            <img src={data.images?.jpg.large_image_url} alt={`gambar-${i}`} className="h-full w-full object-cover rounded-xl" />
            <div className="absolute w-full inset-0 bg-slate-900/75 p-4 transform translate-y-60 group-hover:translate-y-0 transition-transform duration-400 ease-in-out rounded-xl shadow-lg z-20 overflow-hidden max-w-xs">
              <h3 className="text-md font-semibold text-white text-center mb-1 select-none break-words">{data.titles?.[0].title}</h3>
              <p className="text-sm text-white text-center font-medium mb-2 select-none break-words">Genres: {data.genres?.map((genre) => genre.name).join(", ")}</p>
              <p className="text-xs text-white text-justify leading-relaxed select-none break-words">{data.synopsis ? data.synopsis.split(" ").slice(0, 20).join(" ") + "..." : ""}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  );
};

export default ListAnime;
