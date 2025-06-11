import { Link } from "react-router-dom";

const Carousel = ({ data, index }) => {
  return (
    data && (
      <div className="w-full shrink-0 relative">
        <img className="h-[450px] w-full object-cover" src={data.images.webp.large_image_url} alt={`Carousel-${index}`} />
        <div className="absolute p-4 h-full top-0 left-0 z-10 md:px-30">
          <div className="h-full md:flex md:gap-10 md:items-center">
            <Link to={`/detail/${data.mal_id}`} className="flex md:items-center md:h-full">
              <img className="max-h-52 min-h-40 min-w-40 w-auto rounded mx-auto cursor-pointer" src={data.images.jpg.image_url} alt="images-mini" />
            </Link>
            <div className="text-white">
              <section className="text-center md:text-start">
                <h1 className="text-2xl font-bold text-shadow-lg/90 ">{data.titles[0].title}</h1>
                <p className=" font-semibold text-shadow-lg/50 ">⭐ {data.score}</p>
                <p className="font-semibold text-shadow-lg/45 ">Genres : {data.genres.map((genre) => genre.name).join(",")}</p>
              </section>
              <p className="font-semibold text-shadow-lg/35 text-justify">Synopsis : {data.synopsis.split(" ").slice(0, 18).join(" ")}...</p>
            </div>
          </div>
        </div>
        <div className="w-full h-20 absolute bottom-0 bg-linear-to-b from bg-transparent to-slate-800"></div>
      </div>
    )
  );
};

export default Carousel;
