import { createBanner } from "./Banner";

export default {
  title: "Banner",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createBanner({ ...args });
  },
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    cards: { control: "array" },
    link: { control: "object" },
  },
};

export const Primary = {
  args: {
    title: "Lorem Ipsum",
    activeItem: "Get started",
  },
};
