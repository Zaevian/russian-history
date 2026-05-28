import { z } from 'zod';

// Lightweight frontmatter for high-quality narrative history chapters.
// Goal: solid, well-researched content that serious historians would generally respect.
// Not a full academic reference platform with enforced multi-perspective apparatus.

export const ContentFrontmatterSchema = z.object({
  slug: z.string(),
  title: z.string(),
  era: z.enum([
    'pre-state-kievan',
    'mongol-muscovy',
    'tsardom-empire',
    'imperial',
    'revolutionary',
    'soviet',
    'post-soviet',
  ]),
  dateRange: z.object({
    start: z.number(),
    end: z.number().optional(),
  }),
  related: z.array(z.string()).optional(),
  maps: z.array(z.string()).optional(), // references to map layers if we add them later
  lastUpdated: z.string().date(),
});

export type ContentFrontmatter = z.infer<typeof ContentFrontmatterSchema>;
