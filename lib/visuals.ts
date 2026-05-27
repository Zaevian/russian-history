import fs from 'fs';
import path from 'path';
import { VisualAssetMetaSchema, type VisualAssetMeta } from '../data/schemas/visual-asset.schema';

/**
 * Loads and validates a visual asset's metadata.
 * Used by components and the media review pipeline.
 */
export function getVisualMeta(filename: string): VisualAssetMeta {
  const metaPath = path.join(process.cwd(), 'assets/visuals', `${filename}.meta.json`);
  
  if (!fs.existsSync(metaPath)) {
    throw new Error(`Missing meta file for visual: ${filename}`);
  }

  const raw = fs.readFileSync(metaPath, 'utf-8');
  const json = JSON.parse(raw);
  
  return VisualAssetMetaSchema.parse(json);
}

/**
 * Returns all approved visuals for a given slot range.
 * (Future use for dynamic era heroes, etc.)
 */
export function getApprovedVisuals(): VisualAssetMeta[] {
  const visualsDir = path.join(process.cwd(), 'assets/visuals');
  const files = fs.readdirSync(visualsDir).filter(f => f.endsWith('.meta.json'));
  
  return files
    .map(file => {
      const meta = getVisualMeta(file.replace('.meta.json', ''));
      return meta;
    })
    .filter(meta => meta.status === 'Approved');
}
