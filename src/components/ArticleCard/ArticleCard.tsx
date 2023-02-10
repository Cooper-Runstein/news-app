import styled from "@emotion/styled";
import { Article } from "../../state/app.types";
import { colors } from "../../styles";
import { Button } from "../common/Button";
import { Card } from "../common/Card";

const St = {
  Description: styled.p``,
  Title: styled.h4`
    font-weight: 600;
  `,
  Img: styled.img`
    box-shadow: 1px 1px ${colors.purple};
    border-radius: 4px;
  `,
  More: styled(Button)`
    font-weight: 600;
  `,
};

export const ArticleCard: React.FC<{
  article: Article;
  onArticleClick: () => void;
}> = ({ article, onArticleClick }) => {
  return (
    <Card>
      <St.Title>{article.title}</St.Title>
      {article.urlToImage && (
        <St.Img src={article.urlToImage} alt="article image" />
      )}
      <St.Description>{article.description}</St.Description>
      <St.More onClick={onArticleClick}>{"More >>>"}</St.More>
    </Card>
  );
};
