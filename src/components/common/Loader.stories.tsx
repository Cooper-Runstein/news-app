import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from "./Loader";

export default {
  title: "Common/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

export const Primary: ComponentStory<typeof Loader> = (args) => <Loader />;
