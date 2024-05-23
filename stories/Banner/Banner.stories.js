import { createBanner } from "./Banner";

export default {
  title: "Banner",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createBanner({ ...args });
  },
  argTypes: {
    title: { control: "text" },
    activeItem: { control: "text" },
  },
};

export const Primary = {
  args: {
    title: "Lorem Ipsum",
    activeItem: "Get started",
  },
};
