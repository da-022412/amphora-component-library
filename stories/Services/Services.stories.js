import { createServices } from "./Services";

export default {
  title: "Services",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createServices({ ...args });
  },
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    cards: { control: "array" },
  },
};

export const Primary = {
  args: {
    primary: true,
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
        },
      },
      {
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
        },
      },
      {
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
        },
      },
    ],
  },
};

export const Secondary = {
  args: {
    eyebrow: "Eyebrow Lorem Ipsum",
    title: "Title Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cards: [
      {
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/300/200",
          alt: "Alt 1",
        },
      },
      {
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/300/200",
          alt: "Alt 1",
        },
      },
      {
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/300/200",
          alt: "Alt 1",
        },
      },
      {
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: {
          src: "https://picsum.photos/300/200",
          alt: "Alt 1",
        },
      },
    ],
  },
};
