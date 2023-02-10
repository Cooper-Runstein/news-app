import React from "react";
import { fetchFromNewsApi } from "../../api/service";
import { useAppContext } from "../../state/app.context";
import { Article } from "../../state/app.types";
import { TopNews } from "./TopNews";

export const TopNewsContainer = () => {
  const { country } = useAppContext();

  const [articles, setArticles] = React.useState<Article[] | null>(null);

  const request = React.useCallback(async () => {
    const res = await fetchFromNewsApi({ country });
    setArticles(res);
  }, [country]);

  React.useEffect(() => {
    request();
  }, [request]);

  return <TopNews articles={articles} country={country} />;
};
