import React from 'react';
import type { Meta } from '@storybook/react';

const PhilosophyDoc = () => (
  <div className="prose max-w-3xl mx-auto p-8">
    <h1>Visual &amp; Motion Guidelines</h1>
    
    <p className="lead">
      This project follows a very strict philosophy regarding images, videos, and animation.
    </p>

    <h2>Core Principle</h2>
    <blockquote>
      <strong>All visuals are strictly complementary.</strong><br />
      They exist to give atmosphere, scale, and emotional breathing room.<br />
      <strong>They are never evidence.</strong> They are never a substitute for citations or historiographical debate.
    </blockquote>

    <p>
      Every image and video on RussiaHistory.org must pass this test:
    </p>
    <p><em>“Does removing this asset make the scholarly argument weaker?”</em></p>
    <p>If the answer is yes → the asset is not allowed.</p>

    <h2>Images</h2>
    <ul>
      <li>Every image must have a corresponding <code>.meta.json</code> file.</li>
      <li>All images must include excellent <code>altText</code> + rich <code>extendedDescription</code>.</li>
      <li>High-sensitivity topics (Gulag, famines, political violence) require extreme restraint and explicit historian approval.</li>
    </ul>

    <h2>Animation (Framer Motion)</h2>
    <p>We use Framer Motion very deliberately:</p>
    <ul>
      <li>Only where motion meaningfully improves <strong>comprehension</strong> or <strong>memory</strong></li>
      <li>Never for decoration</li>
      <li>Always respect <code>prefers-reduced-motion</code></li>
    </ul>

    <h2>Reduced Motion</h2>
    <p>
      All components that use Framer Motion <strong>must</strong> use <code>useReducedMotion()</code> from framer-motion.
    </p>

    <h2>How to Add a New Visual</h2>
    <ol>
      <li>Generate the asset using the prompts in the Visual Assets Tracker</li>
      <li>Add the file to <code>assets/visuals/</code></li>
      <li>Create a matching <code>.meta.json</code></li>
      <li>Update the Visual Assets Tracker</li>
      <li>Create a Storybook story</li>
      <li>Get historian sign-off</li>
    </ol>

    <p className="text-sm text-gray-500 mt-8">
      See the <strong>Design System → Complementary Visual</strong> and <strong>Scholarly Video</strong> stories for concrete examples.
    </p>
  </div>
);

const meta: Meta = {
  title: 'Project Philosophy/Visual & Motion Guidelines',
  component: PhilosophyDoc,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {};
