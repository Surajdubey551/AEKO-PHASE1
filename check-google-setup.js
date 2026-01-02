// Quick script to check if Google OAuth is configured
// Run with: node check-google-setup.js

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  const envPath = join(__dirname, '.env');
  const envContent = readFileSync(envPath, 'utf-8');
  
  console.log('\n✅ .env file found!\n');
  
  const hasClientId = envContent.includes('VITE_GOOGLE_CLIENT_ID=');
  const clientIdLine = envContent.split('\n').find(line => line.startsWith('VITE_GOOGLE_CLIENT_ID='));
  
  if (clientIdLine && clientIdLine.includes('=') && clientIdLine.split('=')[1].trim()) {
    const clientId = clientIdLine.split('=')[1].trim();
    if (clientId && clientId.length > 10) {
      console.log('✅ Google Client ID is set!');
      console.log(`   Client ID: ${clientId.substring(0, 20)}...`);
      console.log('\n🎉 Setup looks good! Restart your dev server and test Google sign-in.\n');
    } else {
      console.log('❌ Google Client ID is empty');
      console.log('   Please add your Client ID to .env file');
      console.log('   Get it from: https://console.cloud.google.com/apis/credentials\n');
    }
  } else {
    console.log('❌ Google Client ID not found in .env');
    console.log('   Please add: VITE_GOOGLE_CLIENT_ID=your_client_id_here\n');
  }
  
  const hasApiUrl = envContent.includes('VITE_API_URL=');
  if (hasApiUrl) {
    console.log('✅ API URL is configured');
  }
  
} catch (error) {
  if (error.code === 'ENOENT') {
    console.log('\n❌ .env file not found!');
    console.log('   Creating it now...\n');
    
    // Create basic .env file
    const fs = await import('fs');
    fs.writeFileSync('.env', `VITE_API_URL=http://localhost:5000\nVITE_GOOGLE_CLIENT_ID=\n`);
    console.log('✅ Created .env file!');
    console.log('   Now add your Google Client ID to it.\n');
  } else {
    console.error('Error:', error.message);
  }
}

// Run with: node check-google-setup.js

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  const envPath = join(__dirname, '.env');
  const envContent = readFileSync(envPath, 'utf-8');
  
  console.log('\n✅ .env file found!\n');
  
  const hasClientId = envContent.includes('VITE_GOOGLE_CLIENT_ID=');
  const clientIdLine = envContent.split('\n').find(line => line.startsWith('VITE_GOOGLE_CLIENT_ID='));
  
  if (clientIdLine && clientIdLine.includes('=') && clientIdLine.split('=')[1].trim()) {
    const clientId = clientIdLine.split('=')[1].trim();
    if (clientId && clientId.length > 10) {
      console.log('✅ Google Client ID is set!');
      console.log(`   Client ID: ${clientId.substring(0, 20)}...`);
      console.log('\n🎉 Setup looks good! Restart your dev server and test Google sign-in.\n');
    } else {
      console.log('❌ Google Client ID is empty');
      console.log('   Please add your Client ID to .env file');
      console.log('   Get it from: https://console.cloud.google.com/apis/credentials\n');
    }
  } else {
    console.log('❌ Google Client ID not found in .env');
    console.log('   Please add: VITE_GOOGLE_CLIENT_ID=your_client_id_here\n');
  }
  
  const hasApiUrl = envContent.includes('VITE_API_URL=');
  if (hasApiUrl) {
    console.log('✅ API URL is configured');
  }
  
} catch (error) {
  if (error.code === 'ENOENT') {
    console.log('\n❌ .env file not found!');
    console.log('   Creating it now...\n');
    
    // Create basic .env file
    const fs = await import('fs');
    fs.writeFileSync('.env', `VITE_API_URL=http://localhost:5000\nVITE_GOOGLE_CLIENT_ID=\n`);
    console.log('✅ Created .env file!');
    console.log('   Now add your Google Client ID to it.\n');
  } else {
    console.error('Error:', error.message);
  }
}

