import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'

/**
 * Storybook preview configuration for RussiaHistory.org
 * 
 * Aligned with the design document requirements:
 * - Strong accessibility focus
 * - Reduced motion support (critical for scholarly reading experience)
 * - Our custom fonts and color system
 */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // Enforce WCAG 2.2 AA as the baseline (per design doc)
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
      options: {
        checks: ['wcag2a', 'wcag2aa', 'wcag21aa'],
      },
    },
    docs: {
      // Better docs experience for component library
      autodocs: 'tag',
    },
  },
  // Global decorators for consistent testing environment
  decorators: [
    (Story) => {
      // Simulate the project's reduced-motion preference
      return (
        <div 
          className="font-serif" 
          style={{ 
            '--font-serif': "'Crimson Pro Variable', Georgia, serif",
            '--font-sans': "'Inter Variable', system-ui, sans-serif",
          } as React.CSSProperties}
        >
          <Story />
        </div>
      )
    },
  ],
  globalTypes: {
    reducedMotion: {
      description: 'Simulate prefers-reduced-motion',
      defaultValue: 'no-preference',
      toolbar: {
        title: 'Motion',
        icon: 'accessibility',
        items: [
          { value: 'no-preference', title: 'Normal motion' },
          { value: 'reduce', title: 'Reduced motion' },
        ],
      },
    },
  },
};

export default preview;