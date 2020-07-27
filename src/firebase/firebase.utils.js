import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBDvey2WklxjFfbDxyo4Wv1gDfwEH18T-4',
  authDomain: 'devs-clothing-db.firebaseapp.com',
  databaseURL: 'https://devs-clothing-db.firebaseio.com',
  projectId: 'devs-clothing-db',
  storageBucket: 'devs-clothing-db.appspot.com',
  messagingSenderId: '725546496152',
  appId: '1:725546496152:web:20b7e2350d8842871fe0ed',
  measurementId: 'G-NTPYYFZKHL',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
