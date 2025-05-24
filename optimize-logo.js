import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// This script helps optimize your logo
// Sharp is already installed

async function optimizeLogo() {
  try {
    const inputPath = './client/public/mavi-rentals-logo.png';
    const outputPath = './client/public/logo.png';
    
    if (!fs.existsSync(inputPath)) {
      console.log('❌ Please place your transparent logo as ./client/public/mavi-rentals-logo.png');
      return;
    }
    
    // Optimize the logo with trimming and cropping
    await sharp(inputPath)
      .trim() // Automatically remove whitespace/background around the logo
      .resize(400, null, { // Resize to max width 400px, maintain aspect ratio
        withoutEnlargement: true
      })
      .png({ 
        quality: 90,
        compressionLevel: 9,
        palette: true // Use palette for smaller file size
      })
      .toFile(outputPath);
    
    // Get file sizes
    const originalStats = fs.statSync(inputPath);
    const optimizedStats = fs.statSync(outputPath);
    
    const originalSize = (originalStats.size / 1024 / 1024).toFixed(2);
    const optimizedSize = (optimizedStats.size / 1024).toFixed(2);
    const savings = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
    
    console.log('✅ Logo optimized and trimmed successfully!');
    console.log(`📊 Original size: ${originalSize}MB`);
    console.log(`📊 Optimized size: ${optimizedSize}KB`);
    console.log(`💰 Size reduction: ${savings}%`);
    console.log('✂️ Background whitespace automatically trimmed');
    
  } catch (error) {
    console.error('❌ Error optimizing logo:', error.message);
    console.log('💡 Make sure to install sharp: npm install sharp --save-dev');
  }
}

optimizeLogo(); 