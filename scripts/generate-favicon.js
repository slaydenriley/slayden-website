import sharp from 'sharp';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

async function generateFavicon() {
  try {
    await sharp(join(projectRoot, 'public/icons/favicon.svg'))
      .resize(32, 32)
      .png()
      .toFile(join(projectRoot, 'public/icons/favicon.png'));
  } catch (error) {
    // Handle error silently
  }
}

generateFavicon(); 