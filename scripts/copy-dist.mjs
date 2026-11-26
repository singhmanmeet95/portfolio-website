import fs from 'node:fs';

if (fs.existsSync('out')) {
  fs.rmSync('dist', { recursive: true, force: true });
  fs.cpSync('out', 'dist', { recursive: true });
  console.log('Copied static export from out/ to dist/');
}
