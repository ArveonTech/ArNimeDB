import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useListslAnime from "../hooks/useListAnime";
import Search from "../templates/search/Search";
import ListAnime from "../templates/listAnime/ListAnime";
import Footer from "../templates/footer/Footer";
import Loading from "../templates/loading/Loading";
import Pagination from "../templates/pagination/pagination";

const ExplorePages = () => {
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearch = useDebounce(searchInput, 1000);
  const { pages, listAnime, loadingAnime, error } = useListslAnime(currentPage, debouncedSearch);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchInput, currentPage]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    setSearchInput(debouncedSearch.trim());
  }, [debouncedSearch]);

  const prevPage = () => {
    if (!pages) return;
    if (currentPage <= 1) return;

    setCurrentPage((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" }); // ⬅️ ini buat scroll ke atas
  };

  const nextPage = () => {
    if (!pages) return;
    if (currentPage >= pages.last_visible_page) return;

    setCurrentPage((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" }); // ⬅️ scroll halus ke atas
  };

  return (
    <div className="min-h-screen">
      <Search handleSearch={handleSearch} />
      {loadingAnime ? (
        <Loading />
      ) : (
        <>
          <div className="flex mt-20 gap-10 flex-wrap justify-center">{listAnime && listAnime.map((data, i) => <ListAnime data={data} key={i} />)}</div>
          <Pagination handleNext={nextPage} handlePrev={prevPage} currentPage={currentPage} lastPage={pages?.last_visible_page} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default ExplorePages;
