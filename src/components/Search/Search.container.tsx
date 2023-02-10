import { debounce } from "lodash";
import React from "react";
import { fetchFromNewsApi } from "../../api/service";
import { useAppContext } from "../../state/app.context";
import { Article } from "../../state/app.types";
import { Search } from "./Search";

export const SearchContainer = () => {
  const { country } = useAppContext();

  const [articles, setArticles] = React.useState<Article[] | null>(null);

  const [isLoading, setIsLoading] = React.useState(false);

  const searchRequest = React.useCallback(
    async (search: string) => {
      console.log(search);
      setIsLoading(true);
      const res = await fetchFromNewsApi({ country, search });
      console.log(res);
      setArticles(res);
      setIsLoading(false);
    },
    [country]
  );

  const handleSearch = debounce(searchRequest, 300);

  return (
    <Search
      articles={articles}
      country={country}
      isLoading={isLoading}
      onSearch={handleSearch}
    />
  );
};
