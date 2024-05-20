import { createContactForm } from "./ContactForm";

export default {
  title: "Contact Form",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createContactForm({ ...args });
  },
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    items: { control: "array" },
  },
};

export const Primary = {
  args: {
    eyebrow: "Eyebrow Lorem Ipsum",
    title: "Title Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue.",
    items: [
      {
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
        },
      },
      {
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
        },
      },
      {
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
        },
      },
    ],
  },
};
