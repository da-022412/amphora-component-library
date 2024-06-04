import { createHero } from "./Hero";

export default {
  title: "Hero",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createHero({ ...args });
  },
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    link: { control: "object" },
    cards: { control: "array" },
  },
};

export const Primary = {
  args: {
    eyebrow: "Eyebrow Lorem Ipsum",
    title: "Title Lorem Ipsum Dolor Sit",
    link: {
      href: "https://www.example.com/",
      cta: "Get Started",
      ariaLabel: "An Example Aria Label for CTA Link",
    },
    cards: [
      {
        title: "Card 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/100",
          alt: "Alt 1",
          height: 100,
          width: 100,
        },
      },
      {
        title: "Card 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/100",
          alt: "Alt 1",
          height: 100,
          width: 100,
        },
      },
      {
        title: "Card 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/100",
          alt: "Alt 1",
          height: 100,
          width: 100,
        },
      },
    ],
  },
};
