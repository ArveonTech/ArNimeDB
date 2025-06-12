import Footer from "../footer/Footer";
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Detail = ({ data }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white text-xl">No data available.</div>;
  }

  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const infoList = [
    { label: "Episodes", value: data.episodes },
    { label: "Duration", value: data.duration },
    { label: "Popularity", value: data.popularity },
    { label: "Season", value: data.season },
    { label: "Studios", value: data.studios?.map((s) => s.name).join(", ") },
    { label: "Streaming", value: data.streaming?.map((s) => s.name).join(", ") },
  ];

  return (
    <div className="bg-slate-800">
      <header className="bg-gradient-to-bl from-slate-900 to-slate-800 p-8 relative">
        <button onClick={() => navigate(-1)}>
          <img src="/icons/prev.png" alt="previous" className="absolute top-5 left-5 w-14 cursor-pointer animate-bounce" />
        </button>

        <div className="flex flex-col items-center mt-8">
          <img src={data.images?.jpg?.large_image_url} alt={`anime-${data.mal_id}`} className="rounded-2xl border-2 border-white w-48 mb-6" />
          <h1 className="text-4xl text-white text-center font-bold">{data?.titles?.[0]?.title || "No Title"}</h1>
          <p className="text-lg text-white text-center mt-3">Genres: {data.genres?.map((g) => g.name).join(", ") || "N/A"}</p>
          <p className="text-md text-white text-center mt-1">Rating: {data.score || "N/A"}</p>
        </div>
      </header>

      <main className="px-6 py-10 max-w-3xl mx-auto">
        <div className="space-y-2 mb-8">
          {infoList.map(({ label, value }) => (
            <p key={label} className="text-white">
              <span className="text-blue-400 font-semibold">{label}:</span> {value || "N/A"}
            </p>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="text-blue-400 text-xl font-semibold mb-2">Synopsis:</h2>
          <p className="text-white text-justify leading-relaxed">{data.synopsis || "No synopsis available."}</p>
        </div>

        {data.trailer?.youtube_id ? (
          <div className="mb-20 md:mb-10">
            <h2 className="text-blue-400 text-xl font-semibold mb-4">Trailer:</h2>
            <div className="aspect-video">
              <YouTube videoId={data.trailer.youtube_id} opts={opts} className="w-full h-full aspect-video" />
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-center text-2xl font-semibold ">Trailer tidak tersedia</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Detail;
