import { createBlogPosts } from "./BlogPosts";

export default {
  title: "Blog Posts",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createBlogPosts({ ...args });
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
        image: {
          src: "https://picsum.photos/1920/1080",
          alt: "Alt 1",
          height: 1080,
          width: 1920,
        },
        link: {
          href: "https://www.example.com/",
          ariaLabel: "An Example Aria Label for CTA Link",
        },
      },
      {
        title: "Lorem ipsum",
        image: {
          src: "https://picsum.photos/600/600",
          alt: "Alt 1",
          height: 600,
          width: 600,
        },
        link: {
          href: "https://www.example.com/",
          ariaLabel: "An Example Aria Label for CTA Link",
        },
      },
      {
        title: "Lorem ipsum",
        image: {
          src: "https://picsum.photos/300/200",
          alt: "Alt 1",
          height: 200,
          width: 300,
        },
        link: {
          href: "https://www.example.com/",
          ariaLabel: "An Example Aria Label for CTA Link",
        },
      },
      {
        title: "Lorem ipsum",
        image: {
          src: "https://picsum.photos/400/200",
          alt: "Alt 1",
          height: 200,
          width: 400,
        },
        link: {
          href: "https://www.example.com/",
          ariaLabel: "An Example Aria Label for CTA Link",
        },
      },
      {
        title: "Lorem ipsum",
        image: {
          src: "https://picsum.photos/200/200",
          alt: "Alt 1",
          height: 200,
          width: 200,
        },
        link: {
          href: "https://www.example.com/",
          ariaLabel: "An Example Aria Label for CTA Link",
        },
      },
    ],
  },
};
