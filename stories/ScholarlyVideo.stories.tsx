import type { Meta, StoryObj } from '@storybook/react';

interface ScholarlyVideoProps {
  src: string;
  title: string;
  description: string;
}

const ScholarlyVideo = ({ src, title, description }: ScholarlyVideoProps) => {
  return (
    <div className="max-w-4xl">
      <div className="mb-3">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-[#5c5146] mt-1">{description}</p>
      </div>
      
      <video 
        controls 
        className="w-full rounded border bg-black"
        style={{ maxHeight: '480px' }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="mt-2 text-[10px] text-[#5c5146] opacity-70">
        This video is purely illustrative and informational. It does not replace textual analysis or citations.
      </div>
    </div>
  );
};

const meta: Meta<typeof ScholarlyVideo> = {
  title: 'Design System/Scholarly Video',
  component: ScholarlyVideo,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ScholarlyVideo>;

export const MuscovyExpansion: Story = {
  args: {
    src: '/assets/visuals/muscovy-expansion-1462-1914.mp4',
    title: 'Muscovite Territorial Expansion (1462–1914)',
    description: 'Slow, contemplative animation showing the growth of the Grand Duchy of Moscow into the Russian Empire. Used in the Rise of Muscovy section.',
  },
};

export const EasternFront: Story = {
  args: {
    src: '/assets/visuals/eastern-front-1941-1945-strategic.mp4',
    title: 'Eastern Front Strategic Overview (1941–1945)',
    description: '15-second strategic map animation of the war on the Eastern Front. Front lines move at 1/4 speed. No combat glorification.',
  },
};