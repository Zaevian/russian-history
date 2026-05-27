import { z } from 'zod';

/**
 * Schema for visual asset metadata.
 * Every image/video in /assets/visuals/ must have a corresponding .meta.json
 * that validates against this schema.
 *
 * This enforces the "complementary only" philosophy from the design document.
 */
export const VisualAssetMetaSchema = z.object({
  slot: z.number().int().min(1).max(50),
  title: z.string().min(3),
  file: z.string(),
  type: z.enum(['image', 'video']),
  ratio: z.string(), // e.g. "16:9", "4:3", "1:1"
  placement: z.string(),
  purpose: z.string(),
  prompt: z.string().min(50), // The exact prompt used for generation
  generationDate: z.string().date(),
  altText: z.string().min(10),
  extendedDescription: z.string().min(30),
  historianReviewer: z.string().optional(),
  status: z.enum(['Generated', 'In Review', 'Approved', 'Needs Revision']),
  sensitivity: z.enum(['standard', 'high', 'extreme']).default('standard'),
  notes: z.string().optional(),
});

export type VisualAssetMeta = z.infer<typeof VisualAssetMetaSchema>;

// Example usage in code:
// const meta = VisualAssetMetaSchema.parse(jsonData);
