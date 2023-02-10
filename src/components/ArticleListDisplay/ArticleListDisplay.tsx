import styled from "@emotion/styled";
import { Article } from "../../state/app.types";
import { ArticleCardContainer } from "../ArticleCard";

const St = {
  Articles: styled.div`
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr 1fr;
  `,
};

export const ArticleListDisplay: React.FC<{ articles: null | Article[] }> = ({
  articles,
}) => {
  return (
    <St.Articles>
      {!!articles?.length &&
        articles.map((article) => (
          <ArticleCardContainer key={article.title} article={article} />
        ))}
    </St.Articles>
  );
};
