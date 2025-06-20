import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useUpdateApiTop from "../hooks/useUpdateApiTop";
import useUpdateToday from "../hooks/useUpdateToday";
import Loading from "../templates/loading/Loading";
import Carousel from "../templates/carousel/Carousel";
import Footer from "../templates/footer/Footer";
import ListAnime from "../templates/listAnime/ListAnime";

const HomePages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { dataTop, loadingTop, errorTop } = useUpdateApiTop({ limit: 10 });
  const { updateAnime, loadingUpdate, errorUpdate } = useUpdateToday();
  const carousel = dataTop.slice(0, 5);

  useEffect(() => {
    if (carousel && carousel.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % carousel.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [carousel]);

  const nextSlide = () => {
    if (carousel && carousel.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % carousel.length);
    }
  };

  const prevSlide = () => {
    if (carousel && carousel.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + carousel.length) % carousel.length);
    }
  };

  return (
    <div className="bg-slate-800">
      <div className="carousel">
        <div className="w-full h-[450px] overflow-hidden relative">
          {loadingTop ? (
            <Loading />
          ) : (
            <div className="h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {carousel && carousel.map((data, index) => <Carousel data={data} index={index} key={index} />)}
            </div>
          )}

          <img src="/icons/prev.png" alt="prev" onClick={prevSlide} className="w-15 absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer z-10" />
          <img src="/icons/next.png" alt="next" onClick={nextSlide} className="w-15 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer z-10" />

          <div className="mt-5 flex gap-2 justify-center absolute bottom-5 w-full">
            {carousel && carousel.map((_, i) => <div key={i} className={`h-3 w-3 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-blue-500 scale-110" : "bg-gray-300"}`}></div>)}
          </div>
        </div>
      </div>
      <div className="mx-10 slider">
        <header className="flex justify-between items-center p-2 mb-10">
          <h1 className="text-2xl font-semibold text-white">Top Anime</h1>
          <Link to="/explore">
            <button className="p-1 w-15 rounded text-sm bg-blue-500 text-white font-medium transition-all duration-300 ease-in-out cursor-pointer hover:w-20">See All</button>
          </Link>
        </header>
        {loadingTop ? (
          <Loading />
        ) : (
          <main className="overflow-hidden group">
            <div className="flex w-max gap-10 animate-infinite-scroll group-hover:[animation-play-state:paused]">
              {dataTop &&
                [...dataTop, ...dataTop].map((data, i) => (
                  <Link to={`/detail/${data.mal_id}`} className="w-44 shrink-0" key={i}>
                    <div className="h-full">
                      <img src={data.images.webp.large_image_url} className="h-full object-cover" />
                    </div>
                  </Link>
                ))}
            </div>
          </main>
        )}
      </div>
      <div className="UpdateAnime mt-10 p-5">
        <header className="mb-10">
          <h1 className="text-3xl text-white">Update Anime</h1>
        </header>
        <main>{loadingUpdate ? <Loading /> : <div className="flex gap-10 flex-wrap justify-center">{updateAnime && updateAnime.map((data, i) => <ListAnime data={data} key={i} />)}</div>}</main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePages;
