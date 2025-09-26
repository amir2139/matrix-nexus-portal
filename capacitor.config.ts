import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e57a2e8b7e2748bca20e44c0148eb650',
  appName: 'MatrixxMTA',
  webDir: 'dist',
  server: {
    url: 'https://e57a2e8b-7e27-48bc-a20e-44c0148eb650.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    StatusBar: {
      style: 'dark',
      backgroundColor: '#1a1625'
    }
  }
};

export default config;