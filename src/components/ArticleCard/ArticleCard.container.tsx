import React from "react";
import { useAppContext } from "../../state/app.context";
import { Article } from "../../state/app.types";
import { ArticleCard } from "./ArticleCard";

export const ArticleCardContainer: React.FC<{ article: Article }> = ({
  article,
}) => {
  const { setArticle } = useAppContext();

  const handleArticleClick = React.useCallback(() => {
    console.log({ article });
    setArticle(article);
  }, [article]);

  return <ArticleCard article={article} onArticleClick={handleArticleClick} />;
};
