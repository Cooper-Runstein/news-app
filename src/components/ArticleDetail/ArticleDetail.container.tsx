import React from "react";
import { useAppContext } from "../../state/app.context";
import { ArticleDetail } from "./ArticleDetail";

export const ArticleDetailContainer: React.FC = () => {
  const { article, setArticle } = useAppContext();

  const handleReturnClick = React.useCallback(() => setArticle(null), []);

  // We should never get to the point where article is null here. If we had a real router, instead of null we could use a Redirect here as a better "just in case".
  return article ? (
    <ArticleDetail article={article} onReturnClick={handleReturnClick} />
  ) : null;
};
