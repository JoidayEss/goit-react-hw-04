import axios from "axios";

const API_KEY = "_Eo7wDjneR8d06fqIhWY7qqP86Y1JQ478WdRWeqybdI";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImg = async (query, page) => {
  const params = {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      query,
      page,
      per_page: 15,
    },
  };
  const response = await axios(`search/photos?`, params);
  return {
    results: response.data.results,
    total: response.data.total,
  };
};

export default fetchImg;
