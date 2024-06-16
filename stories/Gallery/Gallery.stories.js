import { createGallery } from "./Gallery";

export default {
  title: "Gallery",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createGallery({ ...args });
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
    cards: [
      {
        image: {
          src: "https://picsum.photos/400",
          alt: "Alt 1",
          height: 400,
          width: 400,
        },
      },
      {
        image: {
          src: "https://picsum.photos/400",
          alt: "Alt 1",
          height: 400,
          width: 400,
        },
      },
      {
        image: {
          src: "https://picsum.photos/400",
          alt: "Alt 1",
          height: 400,
          width: 400,
        },
      },
      {
        image: {
          src: "https://picsum.photos/400",
          alt: "Alt 1",
          height: 400,
          width: 400,
        },
      },
      {
        image: {
          src: "https://picsum.photos/400",
          alt: "Alt 1",
          height: 400,
          width: 400,
        },
      },
      {
        image: {
          src: "https://picsum.photos/400",
          alt: "Alt 1",
          height: 400,
          width: 400,
        },
      },
      {
        image: {
          src: "https://picsum.photos/400",
          alt: "Alt 1",
          height: 400,
          width: 400,
        },
      },
      {
        image: {
          src: "https://picsum.photos/400",
          alt: "Alt 1",
          height: 400,
          width: 400,
        },
      },
    ],
  },
};
