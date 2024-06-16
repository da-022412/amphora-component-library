import { createBrands } from "./Brands";

export default {
  title: "Brands",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createBrands({ ...args });
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
        image: {
          src: "https://picsum.photos/240/100",
          alt: "Alt 1",
          height: 100,
          width: 240,
        },
      },
      {
        image: {
          src: "https://picsum.photos/240/100",
          alt: "Alt 1",
          height: 100,
          width: 240,
        },
      },
      {
        image: {
          src: "https://picsum.photos/240/100",
          alt: "Alt 1",
          height: 100,
          width: 240,
        },
      },
      {
        image: {
          src: "https://picsum.photos/240/100",
          alt: "Alt 1",
          height: 100,
          width: 240,
        },
      },
      {
        image: {
          src: "https://picsum.photos/240/100",
          alt: "Alt 1",
          height: 100,
          width: 240,
        },
      },
      {
        image: {
          src: "https://picsum.photos/240/100",
          alt: "Alt 1",
          height: 100,
          width: 240,
        },
      },
      {
        image: {
          src: "https://picsum.photos/240/100",
          alt: "Alt 1",
          height: 100,
          width: 240,
        },
      },
      {
        image: {
          src: "https://picsum.photos/240/100",
          alt: "Alt 1",
          height: 100,
          width: 240,
        },
      },
    ],
  },
};
