import axios from "axios";

export const getAnimeApi = async (resource, query = "") => {
  const baseUrl = import.meta.env.VITE_API_ANIME_BASE_URL;
  const url = query ? `${baseUrl}/${resource}?${query}` : `${baseUrl}/${resource}`;
  return await axios.get(url);
};
