import { Article } from "../state/app.types";
import { faker } from "@faker-js/faker";

export const createArticle = (overrides: Partial<Article> = {}): Article => {
  return {
    author: faker.name.fullName(),
    content: faker.lorem.paragraphs(3),
    description: faker.commerce.productDescription(),
    source: {
      id: faker.datatype.uuid(),
      name: faker.company.name(),
    },
    title: faker.hacker.phrase(),
    url: faker.internet.url(),
    urlToImage: "https://fakeimg.pl/800/",
    ...overrides,
  };
};
