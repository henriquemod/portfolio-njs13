import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "../icon-button";
// import { within } from '@storybook/testing-library'
// import { expect } from '@storybook/jest'

import Lateral from ".";
import { IconType } from "@/domain/models/profile-data-model";

const iconList = [
  <IconButton key={1} icon={IconType.Github} href="" />,
  <IconButton key={2} icon={IconType.Github} href="" />,
  <IconButton key={3} icon={IconType.Github} href="" />,
  <IconButton key={4} icon={IconType.Github} href="" />,
];

const meta = {
  title: "Components/Lateral",
  component: Lateral,
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: ["object", "string"],
      description: "List of icons",
    },
  },
} satisfies Meta<typeof Lateral>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: iconList,
  },
};

export const WithText: Story = {
  args: {
    content: "fulano@gmail.com",
  },
};

// Primary.play = async ({ canvasElement, step, args }) => {
//   const canvas = within(canvasElement)
//   const expectedFilledBlocksSize = args.level
//   const expectedNoneBlocksSize = 5 - args.level

//   await step('should render all blocks', async () => {
//     const blocks = canvas.queryAllByRole('rank-block')
//     const noneBlocks = canvas.queryAllByRole('rank-block-none')

//     expect(blocks).toHaveLength(expectedFilledBlocksSize)
//     expect(noneBlocks).toHaveLength(expectedNoneBlocksSize)
//   })
// }
