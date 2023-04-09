import type { Meta, StoryObj } from "@storybook/react";
import Box from ".";

const meta = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: "Box",
  },
};
