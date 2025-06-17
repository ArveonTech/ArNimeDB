import useGenresAnime from "../hooks/useGenresAnime";
import Footer from "../templates/footer/Footer";
import { useSearchParams } from "react-router-dom";
import Loading from "../templates/loading/Loading";
import ListAnime from "../templates/listAnime/ListAnime";
import Dropdown from "../templates/dropdowngenres/dropdown";
import Pagination from "../templates/pagination/pagination";

const GenresPages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromQuery = parseInt(searchParams.get("page")) || 1;
  const genresFromQuery = searchParams.get("genres") || "";
  const { pages, listAnime, loadingAnime, error, genresAnime } = useGenresAnime(pageFromQuery, genresFromQuery);

  const handleClickGenres = (callback) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set("genres", callback);
    console.log(currentParams);
    currentParams.set("page", 1); // reset page ke awal kalau perlu
    setSearchParams(currentParams);
  };

  const prevPage = () => {
    if (!pages || pageFromQuery <= 1) return;

    setSearchParams({ page: pageFromQuery - 1 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (!pages || pageFromQuery >= pages.last_visible_page) return;

    setSearchParams({ page: pageFromQuery + 1 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Dropdown data={genresAnime} handleClick={handleClickGenres} />
      {loadingAnime ? (
        <Loading />
      ) : (
        <>
          <div className="flex mt-20 gap-10 flex-wrap justify-center">{listAnime && listAnime.length > 0 ? listAnime.map((data, i) => <ListAnime data={data} key={i} />) : <p className="text-white text-xl">Not Found</p>}</div>
          <Pagination handleNext={nextPage} handlePrev={prevPage} currentPage={pageFromQuery} lastPage={pages?.last_visible_page} />
        </>
      )}
      <Footer />
    </>
  );
};

export default GenresPages;
