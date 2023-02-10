import { Article, Country } from "../state/app.types";

const localApiPath = "http://127.0.0.1:5173/api";
const URL = "/v2/top-headlines";

const API_KEY = import.meta.env.VITE_API_KEY;

// TODO: some error handling
export const fetchFromNewsApi = async (args: {
  country: Country;
  search?: string;
}): Promise<Article[]> => {
  const rawParams: any = { country: args.country.toLowerCase() };

  if (args.search) {
    rawParams["q"] = args.search;
  }

  const params = new URLSearchParams(rawParams);

  const requestURL = `${localApiPath}${URL}?${params}&apiKey=${API_KEY}`;

  const res = await fetch(requestURL, {
    headers: { "Content-Type": "application/json" },
  });

  const json = await res.json();

  return json.articles;
};
