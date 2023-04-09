import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Header from ".";

const itensList = [
  {
    label: "Home",
    url: "/",
    active: true,
  },
  {
    label: "Sobre",
    url: "/sobre",
  },
  {
    label: "Contato",
    url: "/contato",
  },
  {
    label: "Contato",
    url: "/contato",
  },
  {
    label: "Contato",
    url: "/contato",
  },
];

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  args: {
    menuItens: itensList,
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const AlignLeft: Story = {
  args: {},
};

export const AlignRight: Story = {
  args: {},
};

Primary.play = async ({ canvasElement, step, args }) => {
  const canvas = within(canvasElement);
  const list = args.menuItens;

  await step("should render labels and urls correctly", async () => {
    for (let i = 0; i < list.length; i++) {
      await step(`should render ${list[i].label}`, async () => {
        const item = list[i];
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        const element = canvas.getByText(
          `<${item.label} />`
        ) as HTMLAnchorElement;

        expect(element).toBeInTheDocument();
        expect(element).toHaveAttribute("href", item.url);
        expect(element.href).toBe(`${window.location.origin}${item.url}`);
      });
    }
  });
};
