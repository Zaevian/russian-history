import { z } from 'zod';

// Historian enum - extend as needed
export const HistorianSchema = z.enum([
  'Pipes', 'Figes', 'Hosking', 'Lieven', 'Applebaum', 'Service',
  'Fitzpatrick', 'Snyder', 'Plokhy', 'Suny', 'Engelstein', 'Holquist',
  'Kollmann', 'Kivelson', 'Hellie',
]);

export const CitationEntrySchema = z.object({
  historian: HistorianSchema,
  work: z.string(),
  year: z.number().int(),
  pageOrSection: z.string().optional(),
  quote: z.string().optional(),
  doiOrUrl: z.string().url().optional(),
});

export const PrimarySourceApparatusSchema = z.object({
  sourceTitle: z.string(),
  provenance: z.string().min(50, "Provenance must be at least 50 characters"),
  translator: z.string().optional(),
  context: z.string().min(30),
  textualNotes: z.string().optional(),
});

export const DebatePositionSchema = z.object({
  label: z.string(),
  historians: z.array(HistorianSchema).min(1),
  summary: z.string(),
  keyWorks: z.array(z.string()),
});

export const DebateRegistrySchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, "kebab-case required"),
  title: z.string(),
  question: z.string(),
  positions: z.array(DebatePositionSchema).min(2, "At least two opposing positions required"),
  resolutionNotes: z.string().optional(),
  lastReviewed: z.string().date(),
});

// Main frontmatter for all content
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
  type: z.enum(['narrative', 'thematic', 'figure', 'primary-source']),
  dateRange: z.object({
    start: z.number(),
    end: z.number().optional(),
  }),
  historians: z.array(HistorianSchema).min(2, "Minimum 2 historians required for scholarly rigor"),
  debates: z.array(z.string()).optional(), // keys to debate registry
  primarySourceApparatus: PrimarySourceApparatusSchema.optional(),
  related: z.array(z.string()).optional(),
  maps: z.array(z.string()).optional(),
  wordCount: z.number().optional(),
  lastUpdated: z.string().date(),
  license: z.string().default('CC-BY-NC-SA'),
});

export type ContentFrontmatter = z.infer<typeof ContentFrontmatterSchema>;
export type DebateRegistry = z.infer<typeof DebateRegistrySchema>;
