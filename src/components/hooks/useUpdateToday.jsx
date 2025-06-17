import { useEffect, useState } from "react";
import { getAnimeApi } from "../../libs/api-lib";

const useUpdateToday = () => {
  const [loadingUpdate, setLoading] = useState(false);
  const [updateAnime, setUpdateAnime] = useState([]);
  const [errorUpdate, setError] = useState(null);
  const cacheKeyUpdateAnime = "lastFecthDate";

  useEffect(() => {
    setLoading(true);
    const time = new Date();
    const today = time.toLocaleString("us-US", { weekday: "long" }).toLowerCase();
    const lastFecthDate = localStorage.getItem("lastFecthDate");

    if (lastFecthDate) {
      const cached = JSON.parse(lastFecthDate);
      if (cached.today === today) {
        setUpdateAnime(cached.data);
        setLoading(false);
        return;
      }
    }

    const fetchData = async () => {
      try {
        const response = await getAnimeApi(`schedules/${today}`);
        const newData = {
          today,
          data: response.data.data,
        };
        localStorage.setItem(cacheKeyUpdateAnime, JSON.stringify(newData));
        setUpdateAnime(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { updateAnime, loadingUpdate, errorUpdate };
};

export default useUpdateToday;
