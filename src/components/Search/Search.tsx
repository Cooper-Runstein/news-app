import styled from "@emotion/styled";
import { Article, Country, countryCodeToTextMap } from "../../state/app.types";
import { ArticleListDisplay } from "../ArticleListDisplay/ArticleListDisplay";
import { Page } from "../common/layout";
import { Loader } from "../common/Loader";
import { PageHeader } from "../common/typography";

const St = {
  Input: styled.input`
    border-radius: 4px;
    padding: 4px;
    font-size: 18px;
    margin-bottom: 32px;
  `,
  Header: PageHeader,
  Search: Page,
};

export const Search: React.FC<{
  articles: Article[] | null;
  isLoading: boolean;
  onSearch: (search: string) => void;
  country: Country;
}> = ({ articles, isLoading, onSearch, country }) => {
  return (
    <St.Search>
      <St.Header>Search News From {countryCodeToTextMap[country]}</St.Header>
      <St.Input onChange={(e) => onSearch(e.target.value)} />
      {isLoading ? <Loader /> : <ArticleListDisplay articles={articles} />}
    </St.Search>
  );
};
