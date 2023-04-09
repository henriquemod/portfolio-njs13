/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { IconType } from "@/domain/models/profile-data-model";
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";

import IconButton from ".";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label of the button",
    },
    icon: {
      control: "object",
      description: "Icon of the button",
    },
    href: {
      control: "text",
      description: "Link of the button",
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: IconType.Github,
    href: "http://google.com.br/",
  },
};

Primary.play = async ({ canvasElement, step, args }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole("link") as HTMLAnchorElement;

  await step("should render icon and link", async () => {
    expect(link).toBeInTheDocument();
    expect(link.href).toBe(args.href);
    expect(link.target).toBe("_self");
  });
};

export const WithLabel: Story = {
  args: {
    label: "Github",
    icon: IconType.Github,
    href: "http://google.com.br/",
    openNewPage: true,
  },
};

WithLabel.play = async ({ canvasElement, step, args }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole("link") as HTMLAnchorElement;

  await step("should render label", async () => {
    expect(args.label).toBeDefined();

    const label = canvas.getByText(args.label ?? "not-found-text");

    expect(label).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link.href).toBe(args.href);
    expect(link.target).toBe("_blank");
  });
};
