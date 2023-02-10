import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticleDetail } from "./ArticleDetail";
import { createArticle } from "../../mocks.ts/article.mocks";

export default {
  title: "ArticleDetail",
  component: ArticleDetail,
  argTypes: {
    onReturnClick: {
      action: "clicked",
    },
  },
} as ComponentMeta<typeof ArticleDetail>;

export const Primary: ComponentStory<typeof ArticleDetail> = (args) => (
  <ArticleDetail {...args} article={createArticle()} />
);
