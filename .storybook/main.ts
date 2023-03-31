import { AddonOptionsBabel } from "@storybook/addon-coverage";
import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const coverageConfig: AddonOptionsBabel = {
  istanbul: {
    include: ["**/*/*.stories.*"],
    excludeNodeModules: true,
  },
};

const config: StorybookConfig = {
  stories: [
    "../presentation/**/*.mdx",
    "../presentation/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          ...coverageConfig,
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

config.webpackFinal = async (config) => {
  if (config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../"),
      "@mui/base": "@mui/base/legacy",
      "@mui/lab": "@mui/lab/legacy",
      "@mui/material": "@mui/material/legacy",
      "@mui/styled-engine": "@mui/styled-engine/legacy",
      "@mui/system": "@mui/system/legacy",
      "@mui/utils": "@mui/utils/legacy",
    };
  }

  return config;
};

export default config;
