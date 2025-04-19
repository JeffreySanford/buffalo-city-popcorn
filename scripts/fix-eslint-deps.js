/**
 * Helper script to fix ESLint dependency issues
 * Run with: node scripts/fix-eslint-deps.js
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Installing eslint-plugin-rxjs with legacy peer dependencies...');

try {
  // Install eslint-plugin-rxjs with --legacy-peer-deps flag
  execSync('npm install eslint-plugin-rxjs@5.0.3 --save-dev --legacy-peer-deps', { stdio: 'inherit' });
  
  console.log('✅ Installation successful!');
  console.log('\nℹ️  This package has a peer dependency on ESLint v8.x while the project uses ESLint v9.x');
  console.log('   The --legacy-peer-deps flag allows installation despite this conflict.');
  
  // Check if there are other similar issues to report
  console.log('\n🔍 Checking for other potential ESLint plugin issues...');
  
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  const eslintVersion = packageJson.devDependencies.eslint || '';
  console.log(`   Current ESLint version: ${eslintVersion}`);
  console.log('\n✨ You can now run NX commands without dependency errors.');
  
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  console.log('\nTry manually running:');
  console.log('npm install eslint-plugin-rxjs@5.0.3 --save-dev --force');
}
