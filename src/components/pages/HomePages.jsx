import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useUpdateApi from "../hooks/useUpdateApi";
import useUpdateApiSlider from "../hooks/useUpdateApiSlider";

const HomePages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useUpdateApi({ limit: 5 });
  const data = useUpdateApi({ limit: 10 });
  const { dataset, loading } = useUpdateApiSlider();

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
    <div>
      <div className="w-full h-[450px] overflow-hidden relative">
        <div className="h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {carousel &&
            carousel.map((data, i) => (
              <div className="w-full shrink-0 relative" key={i}>
                <img className="h-[450px] w-full object-cover" src={data.images.webp.large_image_url} alt={`Carousel-${i}`} />
                <div className="absolute p-4 h-full top-0 left-0 z-10 md:px-30">
                  <div className="flex gap-10 h-full items-center">
                    <img className="bg-blue-950 h-52 rounded" src={data.images.jpg.image_url} alt="images-mini" />
                    <div className="text-white">
                      <h1 className="text-2xl font-bold text-shadow-lg/90">{data.titles[0].title}</h1>
                      <p className=" font-semibold text-shadow-lg/50">⭐ {data.score}</p>
                      <p className="font-semibold text-shadow-lg/45">Genres : {data.genres.map((genre) => genre.name).join(",")}</p>
                      <p className="font-semibold text-shadow-lg/35 text-justify">Synopsis : {data.synopsis.split(" ").slice(0, 18).join(" ")}...</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-20 absolute bottom-0 bg-linear-to-b from bg-transparent to-slate-800"></div>
              </div>
            ))}
        </div>

        {/* Tombol Navigasi */}
        <img src="/icons/prev.png" alt="prev" onClick={prevSlide} className="w-15 absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer z-10" />
        <img src="/icons/next.png" alt="next" onClick={nextSlide} className="w-15 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer z-10" />

        {/* Indikator */}
        <div className="mt-5 flex gap-2 justify-center absolute bottom-5 w-full">
          {carousel && carousel.map((_, i) => <div key={i} className={`h-3 w-3 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-blue-500 scale-110" : "bg-gray-300"}`}></div>)}
        </div>
      </div>
      <div className="mx-10">
        <header className="flex justify-between items-center p-2 mb-10">
          <h1 className="text-2xl font-semibold text-white">Top Anime</h1>
          <Link to="/explore">
            <button className="p-1 w-15 rounded text-sm bg-blue-500 text-white font-medium transition-all duration-300 ease-in-out cursor-pointer hover:w-20">See All</button>
          </Link>
        </header>
        {loading ? (
          <div className="h-52 flex items-center justify-center">
            <div role="status">
              <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </div>
        ) : (
          <main className="overflow-hidden">
            <div className="flex w-max gap-10 animate-infinite-scroll">
              {dataset &&
                [...dataset, ...dataset].map((data, i) => (
                  <div key={i} className="w-44 shrink-0">
                    <img src={data.images.webp.large_image_url} className="h-full w-full object-cover" />
                  </div>
                ))}
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default HomePages;
