import { useState, useEffect } from "react";
import { getAnimeApi } from "../../libs/api-lib";

const useGenresAnime = (page, genres) => {
  const [loadingAnime, setLoadingAnime] = useState(false);
  const [listAnime, setListAnime] = useState([]);
  const [genresAnime, setGenresAnime] = useState([]);
  const [pages, setPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoadingAnime(true);
    const fetchData = async () => {
      try {
        let endpoint = "";
        let query = "";

        if (genres.trim() === "") {
          endpoint = "top/anime";
          query = `page=${page}`;
        } else {
          endpoint = "anime";
          query = `genres=${genres}&page=${page}`;
        }
        const response = await getAnimeApi(endpoint, query);
        const responseGenres = await getAnimeApi("genres/anime");
        setGenresAnime(responseGenres.data);
        setListAnime(response.data.data);
        setPages(response.data.pagination);
      } catch (error) {
        setError(error);
      } finally {
        setLoadingAnime(false);
      }
    };
    fetchData();
  }, [page, genres]);

  return { pages, listAnime, loadingAnime, error, genresAnime };
};

export default useGenresAnime;
