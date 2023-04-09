import type { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "@/app/globals2.css";

const customViewports = {
  web: {
    name: "Web",
    styles: {
      width: "992px",
      height: "963px",
    },
  },
  mobile: {
    name: "Mobile",
    styles: {
      width: "413px",
      height: "900px",
    },
  },
  sm: {
    name: "sm",
    styles: {
      width: "639px",
      height: "900px",
    },
  },
  md: {
    name: "md",
    styles: {
      width: "767px",
      height: "900px",
    },
  },
  lg: {
    name: "lg",
    styles: {
      width: "1023px",
      height: "900px",
    },
  },
  xl: {
    name: "xl",
    styles: {
      width: "1279px",
      height: "900px",
    },
  },
  wide: {
    name: "Wide",
    styles: {
      width: "1920px",
      height: "900px",
    },
  },
  bp992: {
    name: "bp992",
    styles: {
      width: "992px",
      height: "963px",
    },
  },
  bp768: {
    name: "bp768",
    styles: {
      width: "768px",
      height: "963px",
    },
  },
  bp576: {
    name: "bp576",
    styles: {
      width: "576px",
      height: "963px",
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: "centered",
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
