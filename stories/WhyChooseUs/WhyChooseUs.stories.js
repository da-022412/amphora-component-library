import { createWhyChooseUs } from "./WhyChooseUs";

export default {
  title: "Why Choose Us",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createWhyChooseUs({ ...args });
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
      },
      {
        src: "https://picsum.photos/300/400",
        alt: "Alt 1",
      },
      {
        src: "https://picsum.photos/300/400",
        alt: "Alt 1",
      },
      {
        src: "https://picsum.photos/300/400",
        alt: "Alt 1",
      },
    ],
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
    link: {
      href: "https://www.example.com/",
      cta: "Get Started",
      ariaLabel: "An Example Aria Label for CTA Link",
    },
  },
};
