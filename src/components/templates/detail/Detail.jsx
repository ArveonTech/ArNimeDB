import Footer from "../footer/Footer";
import YouTube from "react-youtube";

const Detail = ({ data }) => {
  const opts = {
    height: "300",
    width: "640",
  };

  return (
    <div className="bg-slate-800 min-h-screen">
      <header className="bg-gradient-to-bl from-slate-900 to-slate-800 p-8">
        <div>
          <img src={data.images?.jpg.large_image_url} alt={`data-${data.mal_id}`} className="rounded-2xl border-2 border-white mx-auto w-48" />
          <h1 className="text-4xl text-white text-center mt-10">{data?.titles?.[0].title}</h1>
          <p className="text-lg text-white text-center mt-5">Genres : {data.genres?.map((genre) => genre.name).join(" ")}</p>
          <p className="text-md text-white text-center mt-2">Rating : {data.score}</p>
        </div>
      </header>
      <main className="px-5 mt-10">
        <div className="details mb-5">
          <p className="text-white mb-2">
            <span className="text-lg text-blue-400">Episodes : </span>
            {data.episodes}
          </p>
          <p className="text-white mb-2">
            <span className="text-lg text-blue-400">Duration : </span>
            {data.duration}
          </p>
          <p className="text-white mb-2">
            <span className="text-lg text-blue-400">Popularity : </span>
            {data.popularity}
          </p>
          <p className="text-white mb-2">
            <span className="text-lg text-blue-400">Season : </span>
            {data.season}
          </p>
          <p className="text-white mb-2">
            <span className="text-lg text-blue-400">Studios : </span>
            {data.studios?.map((s) => s.name).join(",")}
          </p>
          <p className="text-white">
            <span className="text-lg text-blue-400">Streaming : </span>
            {data.streaming?.map((s) => s.name).join(",")}
          </p>
        </div>
        <p className="text-md text-white text-justify tracking-wide mb-5">
          <span className="text-lg text-blue-400">Synopsis : </span>
          {data.synopsis}
        </p>
        <div>
          <h1 className="text-blue-400 text-2xl mb-10">Trailer :</h1>
          <YouTube videoId={data.trailer?.youtube_id} opts={opts} className="flex justify-center" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Detail;
