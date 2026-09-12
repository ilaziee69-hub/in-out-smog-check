const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const base64Path = path.join(publicDir, 'storefront-b64.txt');
const outputPath = path.join(publicDir, 'storefront.jpg');

const base64 = fs.readFileSync(base64Path, 'utf8').trim();
const bytes = Buffer.from(base64, 'base64');

if (bytes.length < 1000 || bytes[0] !== 0xff || bytes[1] !== 0xd8) {
  throw new Error('Decoded storefront image is not a valid JPEG');
}

fs.writeFileSync(outputPath, bytes);
console.log(`Decoded storefront.jpg (${bytes.length} bytes)`);
