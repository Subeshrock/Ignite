import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'fs';

const svg = readFileSync('public/og.svg', 'utf8');

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: {
    loadSystemFonts: true,
  },
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

writeFileSync('public/og.png', pngBuffer);
console.log('✅ OG image generated: public/og.png');
