import { useAppContext } from "../../state/app.context";
import { ArticleDetailContainer } from "../ArticleDetail";
import { SearchContainer } from "../Search";
import { TopNewsContainer } from "../TopNews/TopNews.container";

/** In a real world example, this would use a real router, not a context */
export const AppRouter = () => {
  const { view, article } = useAppContext();
  if (!!article) {
    // if there is an article, this is the most important thing to display
    return <ArticleDetailContainer />;
  }

  if (view === "top") return <TopNewsContainer />;
  if (view === "search") return <SearchContainer />;
  return null;
};
