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
    title: "Title Lorem Ipsum Dolor Sit",
    cards: [
      {
        title: "Card 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: "https://picsum.photos/100",
      },
      {
        title: "Card 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: "https://picsum.photos/100",
      },
      {
        title: "Card 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: "https://picsum.photos/100",
      },
    ],
  },
};
