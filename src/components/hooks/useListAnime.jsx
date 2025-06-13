import { useState, useEffect } from "react";
import { getAnimeApi } from "../../libs/api-lib";

const useListslAnime = (page, searchKeyword = "") => {
  const [loadingAnime, setLoadingAnime] = useState(false);
  const [listAnime, setListAnime] = useState([]);
  const [pages, setPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoadingAnime(true);
    const fetchData = async () => {
      try {
        let endpoint = "";
        let query = "";

        if (searchKeyword.trim() === "") {
          // Top anime
          endpoint = "top/anime";
          query = `page=${page}`;
        } else {
          // Search anime
          endpoint = "anime";
          query = `q=${searchKeyword}&page=${page}`;
        }
        const response = await getAnimeApi(endpoint, query);
        setListAnime(response.data.data);
        setPages(response.data.pagination);
      } catch (error) {
        setError(error);
      } finally {
        setLoadingAnime(false);
      }
    };

    fetchData();
  }, [page, searchKeyword]);

  return { pages, listAnime, loadingAnime, error };
};

export default useListslAnime;
