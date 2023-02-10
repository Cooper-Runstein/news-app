import styled from "@emotion/styled";
import { Article } from "../../state/app.types";
import { colors } from "../../styles";
import { Button } from "../common/Button";

const St = {
  ArticleDetail: styled.div`
    margin: auto;
    padding: 32px;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 16px;
    box-shadow: 0 2px 10px ${colors.navy}, inset 0 -1px 1px ${colors.navy};
    margin-top: 32px;
  `,
  Description: styled.p`
    font-weight: 600;
  `,
  Content: styled.p``,
  Title: styled.h2`
    font-weight: 800;
    margin-bottom: 16px;
  `,
  Return: styled(Button)`
    font-weight: 600;
  `,
  Img: styled.img`
    box-shadow: 1px 1px ${colors.purple};
    border-radius: 4px;
    max-width: 600px;
  `,
};

export const ArticleDetail: React.FC<{
  article: Article;
  onReturnClick: () => void;
}> = ({ article, onReturnClick }) => {
  return (
    <St.ArticleDetail>
      <St.Title>{article.title}</St.Title>
      {article.urlToImage && (
        <St.Img src={article.urlToImage} alt="article image" />
      )}
      <St.Description>{article.description}</St.Description>
      <St.Content>{article.content}</St.Content>
      <St.Return onClick={onReturnClick}>{"<<< Return"}</St.Return>
    </St.ArticleDetail>
  );
};
