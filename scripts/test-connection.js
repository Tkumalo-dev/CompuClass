// Simple script to test Supabase connection
const fetch = require('node-fetch');

const supabaseUrl = 'https://ymudwaliirgtfqmzhnyd.supabase.co';

async function testConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/`, {
      method: 'HEAD',
      timeout: 5000,
    });
    
    if (response.ok) {
      console.log('✅ Supabase connection successful');
    } else {
      console.log('❌ Supabase connection failed:', response.status);
    }
  } catch (error) {
    console.log('❌ Network error:', error.message);
  }
}

testConnection();