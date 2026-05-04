/**
 * Generates favicon PNG files from favicon.svg.
 * Outputs: public/favicon-16.png, public/favicon-32.png,
 *          public/favicon-48.png, public/apple-touch-icon.png (180x180)
 * Run once: node scripts/generate-favicon.mjs
 */

import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath   = join(__dirname, '..', 'public', 'favicon.svg');
const svgData   = readFileSync(svgPath, 'utf8');

const sizes = [
  { size: 16,  out: 'favicon-16.png' },
  { size: 32,  out: 'favicon-32.png' },
  { size: 48,  out: 'favicon-48.png' },
  { size: 180, out: 'apple-touch-icon.png' },
];

for (const { size, out } of sizes) {
  const resvg = new Resvg(svgData, {
    fitTo: { mode: 'width', value: size },
  });
  const png = resvg.render().asPng();
  const dest = join(__dirname, '..', 'public', out);
  writeFileSync(dest, png);
  console.log(`✓ ${out}  (${size}×${size})`);
}
