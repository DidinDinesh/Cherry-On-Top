// firebase.js
import admin from 'firebase-admin';
import serviceAccount from './cherry-on-top-590e0-firebase-adminsdk-r7ls2-a00306ab43.json'; // Download from Firebase console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const verifyGoogleToken = async (idToken) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    return decodedToken;
  } catch (error) {
    console.error('Error verifying Google token:', error);
    throw new Error('Invalid Google Token');
  }
};