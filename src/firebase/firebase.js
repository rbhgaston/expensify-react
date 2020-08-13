import * as firebase from 'firebase'
import {} from 'firebase/auth'
import 'firebase/analytics'
import 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);
// does not run in nodejs env, therefore in jest env
// although it runs on the browser
// firebase.analytics();

const db = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase,
    googleAuthProvider,
    db as default }

