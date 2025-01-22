// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY.toString(),
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN.toString(),
  databaseURL: import.meta.env.VITE_FB_DATABASE_URL.toString(),
  projectId: import.meta.env.VITE_FB_PROJECT_ID.toString(),
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET.toString(),
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID.toString(),
  appId: import.meta.env.VITE_FB_APP_ID.toString(),
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
