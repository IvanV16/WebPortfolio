/**
 * Packs multiple PNG files into a single .ico file.
 * ICO supports embedded PNG data for sizes >= 16x16.
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub       = join(__dirname, '..', 'public');

const images = [
  { file: 'favicon-16.png', size: 16 },
  { file: 'favicon-32.png', size: 32 },
  { file: 'favicon-48.png', size: 48 },
];

const pngBuffers = images.map(({ file }) => readFileSync(join(pub, file)));

// ICO header: 6 bytes
const count  = images.length;
const header = Buffer.alloc(6);
header.writeUInt16LE(0,     0); // reserved
header.writeUInt16LE(1,     2); // type: ICO
header.writeUInt16LE(count, 4); // image count

// Directory entries: 16 bytes each
const dirSize   = count * 16;
let   dataOffset = 6 + dirSize;

const dirs = images.map(({ size }, i) => {
  const entry = Buffer.alloc(16);
  const s = size >= 256 ? 0 : size;
  entry.writeUInt8(s,  0); // width
  entry.writeUInt8(s,  1); // height
  entry.writeUInt8(0,  2); // palette colours
  entry.writeUInt8(0,  3); // reserved
  entry.writeUInt16LE(1,  4); // planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffers[i].length, 8);  // data size
  entry.writeUInt32LE(dataOffset, 12); // data offset
  dataOffset += pngBuffers[i].length;
  return entry;
});

const ico = Buffer.concat([header, ...dirs, ...pngBuffers]);
const dest = join(pub, 'favicon.ico');
writeFileSync(dest, ico);
console.log(`✓ favicon.ico  (${images.map(i => i.size).join('+')} px, ${ico.length} bytes)`);
