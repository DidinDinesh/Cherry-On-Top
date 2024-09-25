
import admin from 'firebase-admin';
import serviceAccount from './serviceAccount.json' assert { type: "json" }


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