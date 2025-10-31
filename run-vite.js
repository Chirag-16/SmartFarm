// This script will run vite directly without relying on shebang line
import('./node_modules/vite/bin/vite.js').catch(err => {
  console.error('Error importing vite:', err);
  process.exit(1);
}); 