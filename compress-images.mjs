import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

const images = [
    { input: 'banner mobile.png', output: 'banner-mobile.webp', quality: 75, width: 768 },
    { input: 'banner desktop.png', output: 'banner-desktop.webp', quality: 75, width: 1920 },
    { input: 'foto_marcelo.JPG', output: 'foto_marcelo.webp', quality: 75, width: 800 },
    { input: 'IMG_4082.JPG', output: 'IMG_4082.webp', quality: 70, width: 800 },
    { input: 'logo_bootcamp.png', output: 'logo_bootcamp.webp', quality: 80, width: 200 },
];

async function compressImages() {
    for (const img of images) {
        const inputPath = path.join(publicDir, img.input);
        const outputPath = path.join(publicDir, img.output);

        try {
            const info = await sharp(inputPath)
                .resize({ width: img.width, withoutEnlargement: true })
                .webp({ quality: img.quality })
                .toFile(outputPath);

            console.log(`✅ ${img.input} → ${img.output} (${(info.size / 1024).toFixed(1)}KB)`);
        } catch (err) {
            console.error(`❌ Error processing ${img.input}:`, err.message);
        }
    }
}

compressImages();
