import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticleCard } from "./ArticleCard";
import { createArticle } from "../../mocks.ts/article.mocks";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
`;

export default {
  title: "ArticleCard",
  component: ArticleCard,
  argTypes: {
    onArticleClick: {
      action: "clicked",
    },
  },
} as ComponentMeta<typeof ArticleCard>;

export const Primary: ComponentStory<typeof ArticleCard> = (args) => (
  <Wrapper>
    <ArticleCard {...args} article={createArticle()} />
  </Wrapper>
);
