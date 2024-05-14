import { createHero } from "./Hero";

export default {
  title: "Hero",
  tags: ["autodocs"],
  render: ({ eyebrow, ...args }) => {
    return createHero({ eyebrow, ...args });
  },
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    cards: { control: "array" },
  },
};

export const Primary = {
  args: {
    eyebrow: "Eyebrow Lorem Ipsum",
    title: "Title Lorem Ipsum Dolor Sit Amet",
    cards: [
      {
        title: "Card 1",
        description: "Description 1",
        image: "https://picsum.photos/100",
      },
      {
        title: "Card 2",
        description: "Description 2",
        image: "https://picsum.photos/100",
      },
      {
        title: "Card 3",
        description: "Description 3",
        image: "https://picsum.photos/100",
      },
    ],
  },
};
