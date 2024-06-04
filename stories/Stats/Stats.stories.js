import { createStats } from "./Stats";

export default {
  title: "Stats",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createStats({ ...args });
  },
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    link: { control: "object" },
    images: { control: "array" },
    cards: { control: "array" },
  },
};

export const Primary = {
  args: {
    eyebrow: "Eyebrow Lorem Ipsum",
    title: "Title Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue.",
    images: [
      {
        src: "https://picsum.photos/300/400",
        alt: "Alt 1",
        height: 300,
        width: 400,
      },
      {
        src: "https://picsum.photos/300/400",
        alt: "Alt 1",
        height: 300,
        width: 400,
      },
      {
        src: "https://picsum.photos/300/400",
        alt: "Alt 1",
        height: 300,
        width: 400,
      },
      {
        src: "https://picsum.photos/300/400",
        alt: "Alt 1",
        height: 300,
        width: 400,
      },
    ],
    cards: [
      {
        title: "123",
        description: "Lorem ipsum dolor",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
          height: 50,
          width: 50,
        },
      },
      {
        title: "123",
        description: "Lorem ipsum dolor",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
          height: 50,
          width: 50,
        },
      },
      {
        title: "123",
        description: "Lorem ipsum dolor lorem ipsum dolor  very long title",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
          height: 50,
          width: 50,
        },
      },
      {
        title: "123",
        description: "Lorem ipsum dolor",
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
