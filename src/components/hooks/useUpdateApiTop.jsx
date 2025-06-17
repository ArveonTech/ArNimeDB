import { useState, useEffect } from "react";
import { getAnimeApi } from "../../libs/api-lib";

const useUpdateApiTop = ({ limit }) => {
  const [loading, setLoading] = useState(false);
  const [dataTop, setData] = useState([]);
  const [error, setError] = useState(null);
  const cacheKeyTopAnime = `TopAnime-${limit}`;

  // ambil data dari api untuk slider
  useEffect(() => {
    setLoading(true);
    const cachedString = localStorage.getItem(cacheKeyTopAnime);
    const cacheDuration = 60 * 1000;
    const now = Date.now();

    if (cachedString) {
      const cached = JSON.parse(cachedString);
      if (now - cached.timestamp < cacheDuration) {
        setData(cached.data);
        setLoading(false);
        return;
      }
    }
    const fetchData = async () => {
      try {
        const response = await getAnimeApi("top/anime", `limit=${limit}`);
        const newData = {
          timestamp: now,
          data: response.data.data,
        };
        localStorage.setItem(cacheKeyTopAnime, JSON.stringify(newData));
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [limit]);

  return { dataTop, loading, error };
};

export default useUpdateApiTop;
