import { createFooter } from "./Footer";

export default {
  title: "Footer",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createFooter({ ...args });
  },
  argTypes: {
    image: { control: "object" },
    links: { control: "array" },
    icons: { control: "array" },
  },
};

export const Primary = {
  args: {
    image: {
      src: "https://picsum.photos/150/50",
      alt: "Alt 1",
    },
    links: [
      {
        href: "https://www.example.com/",
        cta: "Home",
        ariaLabel: "An Example Aria Label for CTA Link",
        active: true,
      },
      {
        href: "https://www.example.com/",
        cta: "About",
        ariaLabel: "An Example Aria Label for CTA Link",
      },
      {
        href: "https://www.example.com/",
        cta: "Services",
        ariaLabel: "An Example Aria Label for CTA Link",
      },
      {
        href: "https://www.example.com/",
        cta: "Blog",
        ariaLabel: "An Example Aria Label for CTA Link",
      },
      {
        href: "https://www.example.com/",
        cta: "Contact",
        ariaLabel: "An Example Aria Label for CTA Link",
      },
    ],
    icons: [
      {
        src: "https://picsum.photos/20",
        alt: "Alt 1",
        link: {
          href: "https://www.example.com/",
          ariaLabel: "An Example Aria Label for CTA Link",
        },
      },
      {
        src: "https://picsum.photos/20",
        alt: "Alt 1",
        link: {
          href: "https://www.example.com/",
          ariaLabel: "An Example Aria Label for CTA Link",
        },
      },
      {
        src: "https://picsum.photos/20",
        alt: "Alt 1",
        link: {
          href: "https://www.example.com/",
          ariaLabel: "An Example Aria Label for CTA Link",
        },
      },
    ],
  },
};
