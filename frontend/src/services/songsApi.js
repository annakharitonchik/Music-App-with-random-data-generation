import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: apiUrl,
});

const getSongs = async ({ page, quantity, seed, likes }) => {
  const res = await api.get("/songs", {
    params: {
      page,
      quantity,
      seed,
      likes,
    },
  });

  return res.data;
};

export default getSongs;
