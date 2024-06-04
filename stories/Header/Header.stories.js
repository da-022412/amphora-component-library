import { createHeader } from "./Header";

export default {
  title: "Header",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createHeader({ ...args });
  },
  argTypes: {
    image: { control: "object" },
    items: { control: "array" },
  },
};

export const Primary = {
  args: {
    image: {
      src: "https://picsum.photos/150/50",
      alt: "Alt 1",
      height: 50,
      width: 150,
    },
    links: [
      {
        href: "https://www.example.com/",
        cta: "Send A Message",
        description: "Click To Email",
        ariaLabel: "An Example Aria Label for CTA Link",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
          height: 50,
          width: 50,
        },
      },
      {
        href: "https://www.example.com/",
        cta: "Located In",
        description: "New York, NY",
        ariaLabel: "An Example Aria Label for CTA Link",
        image: {
          src: "https://picsum.photos/50",
          alt: "Alt 1",
          height: 50,
          width: 50,
        },
      },
    ],
    callout1: {
      href: "https://www.example.com/",
      cta: "Call Out 1",
      ariaLabel: "An Example Aria Label for CTA Link",
    },
    callout2: {
      href: "https://www.example.com/",
      cta: "(123) 456-7890",
      ariaLabel: "An Example Aria Label for CTA Link",
      description: "Call Us Now",
      image: {
        src: "https://picsum.photos/50",
        alt: "Alt 1",
        height: 50,
        width: 50,
      },
    },
    items: [
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
        submenu: [
          {
            href: "https://www.example.com/",
            cta: "Service 1",
            ariaLabel: "An Example Aria Label for CTA Link",
          },
          {
            href: "https://www.example.com/",
            cta: "Service 2",
            ariaLabel: "An Example Aria Label for CTA Link",
          },
          {
            href: "https://www.example.com/",
            cta: "Service 3",
            ariaLabel: "An Example Aria Label for CTA Link",
          },
        ],
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
  },
};
