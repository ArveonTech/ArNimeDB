import { useState, useEffect } from "react";
import { getAnimeApi } from "../../libs/api-lib";

const useListslAnime = (page) => {
  const [loadingAnime, setLoadingAnime] = useState(false);
  const [listAnime, setListAnime] = useState([]);
  const [pages, setPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoadingAnime(true);

    const fetchData = async () => {
      try {
        const response = await getAnimeApi(`top/anime`, `page=${page}`);
        setListAnime(response.data.data);
        setPages(response.data.pagination);
      } catch (error) {
        setError(error);
      } finally {
        setLoadingAnime(false);
      }
    };
    fetchData();
  }, [page]);

  return { pages, listAnime, loadingAnime, error };
};

export default useListslAnime;
