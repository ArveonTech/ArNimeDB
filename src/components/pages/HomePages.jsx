import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useUpdateApiTop from "../hooks/useUpdateApiTop";
import useUpdateToday from "../hooks/useUpdateToday";
import Loading from "../templates/loading/Loading";
import Carousel from "../templates/carousel/Carousel";
import { ToastContainer, toast, Bounce } from "react-toastify";

const HomePages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { dataTop, loadingTop, errorTop } = useUpdateApiTop({ limit: 10 });
  const { updateAnime, loadingUpadate, errorUpdate } = useUpdateToday();
  const errorShownRef = useRef(false);
  const carousel = dataTop.slice(0, 5);
  const updateAnimeSlice = updateAnime.slice(0, 10);

  useEffect(() => {
    if (errorTop || errorUpdate) {
      if (!errorShownRef.current) {
        toast.error("Terjadi Error, silahkan reload", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        errorShownRef.current = true;
      }
    }
  }, [errorTop, errorUpdate]);

  // untuk ngelooping si carousel
  useEffect(() => {
    if (carousel && carousel.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % carousel.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [carousel]);

  // loop slider
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
          <main className="overflow-hidden">
            <div className="flex w-max gap-10 animate-infinite-scroll">
              {dataTop &&
                [...dataTop, ...dataTop].map((data, i) => (
                  <div key={i} className="w-44 shrink-0">
                    <img src={data.images.webp.large_image_url} className="h-full object-cover" />
                  </div>
                ))}
            </div>
          </main>
        )}
      </div>
      <div className="UpdateAnime mt-10 p-5 pb-96">
        <header className="mb-10">
          <h1 className="text-3xl text-white">Update Anime</h1>
        </header>
        <main>
          {loadingUpadate ? (
            <Loading />
          ) : (
            <div className="flex gap-10 flex-wrap justify-center">
              {updateAnime &&
                updateAnime.map((data, i) => (
                  <div className="max-w-max" key={i}>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden relative w-40 h-56 group cursor-pointer">
                      <img src={data.images.jpg.large_image_url} alt={`gambar-${i}`} className="h-full w-full object-cover rounded-xl" />
                      <div className="absolute w-full inset-0 bg-slate-500/50 p-4 transform translate-y-56 group-hover:translate-y-0 transition-transform duration-400 rounded-xl shadow-lg z-20 flex flex-col justify-center">
                        <h3 className="text-lg font-semibold text-white text-center mb-1 select-none">{data.titles[0].title}</h3>
                        <p className="text-sm text-white text-center font-medium mb-2 select-none overflow-hidden text-ellipsis">Genres : {data.genres.map((genre) => genre.name).join(",")}</p>
                        <p className="text-xs text-white text-justify leading-relaxed select-none">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, at!</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </main>
      </div>
      <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />
    </div>
  );
};

export default HomePages;
