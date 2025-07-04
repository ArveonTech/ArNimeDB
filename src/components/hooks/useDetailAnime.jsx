import { useState, useEffect } from "react";
import { getAnimeApi } from "../../libs/api-lib";

const useDetailAnime = (id) => {
  const [loadingAnime, setLoadingAnime] = useState(false);
  const [dataSet, setDataSet] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoadingAnime(true);

    const fetchData = async () => {
      try {
        const response = await getAnimeApi(`anime/${id}/full`);
        setDataSet(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoadingAnime(false);
      }
    };
    fetchData();
  }, [id]);

  return { dataSet, loadingAnime, error };
};

export default useDetailAnime;
