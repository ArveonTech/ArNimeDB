import { useState, useEffect } from "react";
import axios from "axios";

const useUpdateApiSlider = () => {
  const [loading, setLoading] = useState(false);
  const [dataset, setDataSet] = useState(null);
  const cacheKeyTopAnime = "TopAnime";

  // ambil data dari api untuk slider
  useEffect(() => {
    setLoading(true);
    const cachedString = localStorage.getItem(cacheKeyTopAnime);
    const cacheDuration = 60 * 1000;
    const now = Date.now();

    if (cachedString) {
      const cached = JSON.parse(cachedString);
      if (now - cached.timestamp < cacheDuration) {
        setDataSet(cached.data);
        setLoading(false); 
        return;
      }
    }
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/top/anime?limit=10");
        const newData = {
          timestamp: now,
          data: response.data.data,
        };
        setLoading(false);
        localStorage.setItem(cacheKeyTopAnime, JSON.stringify(newData));
        setDataSet(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { dataset, loading };
};

export default useUpdateApiSlider;
