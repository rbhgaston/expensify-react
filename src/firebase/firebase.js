import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/database'
// TODO realtime db vs cloud firestore
// TODO analytics
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics(); // TODO
// DB
const db = firebase.database()

export {firebase, db as default }


// // CREATE
// // set (overwrites), push (for lists)
// const user = {
//     name: 'Ghassen Ben Hamida',
//     job: {
//         role: 'developer',
//         company: 'Google'
//     }
// }
// let userKey;
//
// db.ref('users').push(user)
//     .then(user => {
//         userKey = user.key
//         console.log(user.toString())
//     })
//     .catch(error => console.log(error))
//
// const user2Key = 'user2'
// const user2 = {
//     name: 'Andrew Mead',
//     job: {
//         role: 'CEO',
//         company: 'Apple'
//     }
// }
// db.ref(`users/${user2Key}`).set(user2)
//
// // READ
// // on (for event listening), once (same as on but for one time)
// const onChildChanged = db.ref('users').on('child_changed', snapshot => console.log(snapshot.val()))
//
// // UPDATE
// // update, set
// const updates = {
//     'job/company': 'InstaDeep',
//     name: 'Mead',
//     location: 'Philadelphia' // adds non-existing fields
// }
// db.ref(`users/${user2Key}`).update(updates)
//     .then(() => console.log(`user with key: ${user2Key} updated`))
//
// // DELETE
// // remove, set(null), update(null)
// db.ref(`users/${user2Key}`).remove()
//     .then(() => console.log(`user with key: ${user2Key} removed`))
//
// // UNSUBSCRIBE FROM ON
// db.ref('users').off('child_changed', onChildChanged)
