import { createSteps } from "./Steps";

export default {
  title: "Steps",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createSteps({ ...args });
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
    eyebrow: "Eyebrow Lorem Ipsum",
    title: "Title Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue.",
    cards: [
      {
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
          height: 50,
          width: 50,
        },
      },
      {
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
          height: 50,
          width: 50,
        },
      },
      {
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
          height: 50,
          width: 50,
        },
      },
    ],
    link: {
      href: "https://www.example.com/",
      cta: "Get Started",
      ariaLabel: "An Example Aria Label for CTA Link",
    },
  },
};
