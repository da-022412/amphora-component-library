import { createCallToAction } from "./CallToAction";

export default {
  title: "Call To Action",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createCallToAction({ ...args });
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
    title: "Title Lorem Ipsum Dolor",
    link: {
      href: "https://www.example.com/",
      cta: "Get Started",
      ariaLabel: "An Example Aria Label for CTA Link",
    },
  },
};
