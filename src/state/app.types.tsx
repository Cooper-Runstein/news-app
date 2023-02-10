export const views = ["top", "search"] as const;
export type View = typeof views[number];

export const countries = ["US", "GB"] as const;
export type Country = typeof countries[number];

export type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt?: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};

// This probably belongs elsewhere 🤷
export const countryCodeToTextMap: Record<Country, string> = {
  US: "The United States",
  GB: "Great Britain",
};
