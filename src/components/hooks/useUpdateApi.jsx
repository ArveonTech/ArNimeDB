import { useState, useEffect } from "react";
import axios from "axios";

const useUpdateApi = ({ limit }) => {
  const [data, setData] = useState([]);
  const cacheKeyCarousel = `carouselTopAnime-${limit}`;

  useEffect(() => {
    const cached = localStorage.getItem(cacheKeyCarousel);
    if (cached) {
      const dataLocal = JSON.parse(cached);
      setData(dataLocal);
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.jikan.moe/v4/top/anime?limit=${limit}`);
          localStorage.setItem(cacheKeyCarousel, JSON.stringify(response.data.data));
          setData(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [limit]);

  return data;
};

export default useUpdateApi;
