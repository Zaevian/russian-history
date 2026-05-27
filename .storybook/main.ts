import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",           // Visual regression (strongly aligned with design)
    "@storybook/addon-a11y",              // Accessibility testing (WCAG 2.2 AA target)
    "@storybook/addon-docs",              // Good documentation
    "@storybook/addon-vitest",            // Interaction + component testing
    "@storybook/addon-mcp",               // Nice-to-have
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  // Enable interaction testing as required by the design document
  features: {
    // @ts-ignore - newer Storybook feature flag
    interactions: true,
  },
};

export default config;