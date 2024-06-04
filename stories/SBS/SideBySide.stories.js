import { createSideBySide } from "./SideBySide";

export default {
  title: "Side By Side",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createSideBySide({ ...args });
  },
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    link: { control: "object" },
    items: { control: "array" },
    images: { control: "array" },
    card: { control: "object" },
    imageMain: { control: "object" },
    imageSecondary: { control: "object" },
    cards: { control: "array" },
    reverse: {
      control: { type: "select" },
      options: ["yes", "no"],
    },
  },
};

export const Primary = {
  args: {
    primary: true,
    eyebrow: "Eyebrow Lorem Ipsum",
    title: "Title Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    link: {
      href: "https://www.example.com/",
      cta: "Get Started",
      ariaLabel: "An Example Aria Label for CTA Link",
    },
    items: [
      {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
    ],
    imageMain: {
      src: "https://picsum.photos/600/700",
      alt: "Alt 1",
      height: 700,
      width: 600,
    },
    imageSecondary: {
      src: "https://picsum.photos/600/400",
      alt: "Alt 1",
      height: 600,
      width: 400,
    },
    card: {
      title: "1234",
      description: "Lorem ipsum",
    },
  },
};

export const Reverse = {
  args: {
    primary: true,
    reverse: "yes",
    eyebrow: "Eyebrow Lorem Ipsum",
    title: "Title Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    link: {
      href: "https://www.example.com/",
      cta: "Get Started",
      ariaLabel: "An Example Aria Label for CTA Link",
    },
    items: [
      {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
    ],
    imageMain: {
      src: "https://picsum.photos/600/700",
      alt: "Alt 1",
      height: 700,
      width: 600,
    },
    imageSecondary: {
      src: "https://picsum.photos/600/400",
      alt: "Alt 1",
      height: 600,
      width: 400,
    },
    card: {
      title: "1234",
      description: "Lorem ipsum",
    },
  },
};

export const Secondary = {
  args: {
    primary: false,
    eyebrow: "Eyebrow Lorem Ipsum",
    title: "Title Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageMain: {
      src: "https://picsum.photos/600/700",
      alt: "Alt 1",
      height: 700,
      width: 600,
    },
    imageSecondary: {
      src: "https://picsum.photos/600/400",
      alt: "Alt 1",
      height: 600,
      width: 400,
    },
    cards: [
      {
        title: "123",
        description: "Lorem ipsum",
      },
      {
        title: "123",
        description: "Lorem ipsum",
      },
      {
        title: "123",
        description: "Lorem ipsum",
      },
    ],
  },
};
