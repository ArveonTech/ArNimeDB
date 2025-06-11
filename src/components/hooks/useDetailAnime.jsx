import { useState, useEffect } from "react";
import axios from "axios";

const useDetailAnime = (id) => {
  const [loadingAnime, setLoadingAnime] = useState(false);
  const [dataSet, setDataSet] = useState([]);
  const [error, setError] = useState(null);

  // ambil data dari api untuk slider
  useEffect(() => {
    setLoadingAnime(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
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
