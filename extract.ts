import AdmZip from 'adm-zip';
import fs from 'fs';
import path from 'path';

const zipPath = 'attached_assets/tools_hub_full_units_1759576985097.zip';
const outputDir = 'attached_assets/extracted';

const zip = new AdmZip(zipPath);
zip.extractAllTo(outputDir, true);
console.log('✓ Successfully extracted to:', outputDir);

const files = fs.readdirSync(outputDir);
console.log('\nExtracted files:');
files.forEach(file => {
  const stats = fs.statSync(path.join(outputDir, file));
  console.log(`  ${stats.isDirectory() ? 'DIR ' : 'FILE'} ${file}`);
});
