import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import useListslAnime from "../hooks/useListAnime";
import Search from "../templates/search/Search";
import ListAnime from "../templates/listAnime/ListAnime";
import Footer from "../templates/footer/Footer";
import Loading from "../templates/loading/Loading";
import Pagination from "../templates/pagination/Pagination";

const ExplorePages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromQuery = parseInt(searchParams.get("page")) || 1;
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 1000);
  const { pages, listAnime, loadingAnime } = useListslAnime(pageFromQuery, debouncedSearch);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchInput, pageFromQuery]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setSearchParams({ page: 1 });
  };

  useEffect(() => {
    setSearchInput(debouncedSearch.trim());
  }, [debouncedSearch]);

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
    <div className="min-h-screen">
      <Search handleSearch={handleSearch} />
      {loadingAnime ? (
        <Loading />
      ) : (
        <>
          <div className="flex mt-20 gap-10 flex-wrap justify-center">{listAnime && listAnime.length > 0 ? listAnime.map((data, i) => <ListAnime data={data} key={i} />) : <p className="text-red-500 text-xl">Not Found</p>}</div>
          <Pagination handleNext={nextPage} handlePrev={prevPage} currentPage={pageFromQuery} lastPage={pages?.last_visible_page} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ExplorePages;
