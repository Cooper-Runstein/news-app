import styled from "@emotion/styled";
import { Article, Country, countryCodeToTextMap } from "../../state/app.types";
import { ArticleCardContainer } from "../ArticleCard";
import { ArticleListDisplay } from "../ArticleListDisplay/ArticleListDisplay";
import { Page } from "../common/layout";
import { PageHeader } from "../common/typography";

const St = {
  Header: PageHeader,
  TopNews: Page,
};

export const TopNews: React.FC<{
  articles: null | Article[];
  country: Country;
}> = ({ articles, country }) => {
  return (
    <St.TopNews>
      <St.Header>Top News From {countryCodeToTextMap[country]}</St.Header>
      <ArticleListDisplay articles={articles} />
    </St.TopNews>
  );
};
