import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * This story demonstrates the project's core visual philosophy:
 * - All visuals are complementary only
 * - Strong reduced-motion support
 * - Scholarly restraint
 * 
 * These patterns will be used when building the actual reader components.
 */

interface ComplementaryVisualProps {
  src: string;
  alt: string;
  caption: string;
  reducedMotion?: boolean;
}

const ComplementaryVisual = ({ src, alt, caption, reducedMotion = false }: ComplementaryVisualProps) => {
  return (
    <figure className="max-w-4xl mx-auto my-8">
      <div className="relative aspect-[16/9] overflow-hidden rounded bg-[#1a1816]">
        <img 
          src={src} 
          alt={alt} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Subtle overlay - only if motion is allowed */}
        {!reducedMotion && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        )}
      </div>
      
      <figcaption className="mt-3 text-sm text-[#5c5146] max-w-3xl">
        {caption}
        <span className="block mt-1 text-[10px] opacity-60">
          This image exists purely for atmosphere. All historical knowledge lives in the text with citations.
        </span>
      </figcaption>
    </figure>
  );
};

const meta: Meta<typeof ComplementaryVisual> = {
  title: 'Design System/Complementary Visual',
  component: ComplementaryVisual,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This component demonstrates how we will treat all visual assets in the project.

**Core Rules (from design document):**
- Visuals are complementary only — never evidence
- Must respect \`prefers-reduced-motion\`
- Must include excellent alt text + extended descriptions
- Must feel scholarly and restrained
        `,
      },
    },
  },
  argTypes: {
    reducedMotion: {
      control: 'boolean',
      description: 'Simulates reduced motion preference',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComplementaryVisual>;

export const KievanRusHero: Story = {
  args: {
    src: '/assets/visuals/kievan-rus-hero.jpg',
    alt: 'Atmospheric view of a medieval Slavic river settlement with wooden churches at sunset.',
    caption: 'Kievan Rus era hero image — used as the primary visual for the earliest period landing page.',
    reducedMotion: false,
  },
};

export const WithReducedMotion: Story = {
  args: {
    src: '/assets/visuals/kievan-rus-hero.jpg',
    alt: 'Atmospheric view of a medieval Slavic river settlement with wooden churches at sunset.',
    caption: 'Same visual with reduced motion enabled. The gradient overlay animation is disabled.',
    reducedMotion: true,
  },
};

export const SiberianLandscape: Story = {
  args: {
    src: '/assets/visuals/siberian-dawn.jpg',
    alt: 'Vast empty Siberian landscape at dawn with a single distant Gulag watchtower on the horizon.',
    caption: 'Siberian landscape (extreme sensitivity). Used only once in the most serious thematic contexts.',
    reducedMotion: false,
  },
};