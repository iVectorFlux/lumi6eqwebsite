import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  const inputDir = path.join(__dirname, '../public/images');
  const outputDir = path.join(__dirname, '../public/images/optimized');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    const files = await imagemin([`${inputDir}/*.{png,jpg,jpeg}`], {
      destination: outputDir,
      plugins: [
        imageminWebp({
          quality: 80,
          method: 6
        })
      ]
    });

    console.log('Images optimized:');
    files.forEach(file => {
      const originalSize = fs.statSync(path.join(inputDir, path.basename(file.sourcePath, path.extname(file.sourcePath)) + '.png')).size;
      const optimizedSize = fs.statSync(file.destinationPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      console.log(`${path.basename(file.destinationPath)}: ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    });

    console.log('\nTotal optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
