import { useState, useEffect } from "react";
import { getAnimeApi } from "../../libs/api-lib";

const animeIds = [
  34572, // Black Clover
  1735, // Naruto
  37520, // Dororo
  16498, // Attack on Titan
  40456, // Demon Slayer
  22199, // Akame ga Kill
  19815, // No Game No Life
  11061, // Hunter x Hunter
  11111, // Another
  41433, // Akudama Drive
  31964, // My Hero Academia
  22319, // Tokyo Ghoul
  26243, // Owari no Seraph
  41353, // God of High School
  37779, // The Promised Neverland
  24833, // Assassination Classroom
];

const useRecommendations = () => {
  const [loadingAnime, setLoadingAnime] = useState(false);
  const [listAnime, setListAnime] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingAnime(true);

      const cached = localStorage.getItem("animeRecommendations");

      if (cached) {
        setListAnime(JSON.parse(cached));
        setLoadingAnime(false);
        return;
      }

      const results = [];

      for (let i = 0; i < animeIds.length; i++) {
        const id = animeIds[i];
        try {
          const response = await getAnimeApi(`anime/${id}`);
          results.push(response.data.data);
        } catch (err) {
          setError(err);
        }

        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      localStorage.setItem("animeRecommendations", JSON.stringify(results));
      setListAnime(results);
      setLoadingAnime(false);
    };

    fetchData();
  }, []);

  return { listAnime, loadingAnime, error };
};

export default useRecommendations;
