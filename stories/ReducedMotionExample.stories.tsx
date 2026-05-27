import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

/**
 * Demonstrates proper reduced-motion handling with Framer Motion.
 * This pattern will be used throughout the interactive components (maps, trees, timelines).
 */

interface MotionDemoProps {
  label?: string;
}

const MotionDemo = ({ label = "Animated Element" }: MotionDemoProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 border rounded max-w-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-[#1a1816] text-white rounded text-sm mb-4"
      >
        {isOpen ? 'Close' : 'Open'} {label}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.25 }}
            className="p-4 bg-[#f8f5f0] border text-sm"
          >
            This content would smoothly animate in a real component (timeline scrubber, map layer transition, tree expansion, etc).
            <br /><br />
            When the user has <code>prefers-reduced-motion</code> enabled, the animation is almost instant.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 text-xs text-[#5c5146]">
        Current motion preference: <strong>{shouldReduceMotion ? 'Reduced' : 'Normal'}</strong>
      </div>
    </div>
  );
};

const meta: Meta<typeof MotionDemo> = {
  title: 'Design System/Reduced Motion Handling',
  component: MotionDemo,
  parameters: {
    docs: {
      description: {
        component: 'Example of how we will handle Framer Motion animations responsibly across the site.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MotionDemo>;

export const Default: Story = {
  args: {
    label: "Example Panel",
  },
};