import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCbttVLZE9xKdqA1ITd6-1vpg2-i-ZLn4A",
  authDomain: "aura-dscnsec.firebaseapp.com",
  databaseURL: "https://aura-dscnsec.firebaseio.com",
  projectId: "aura-dscnsec",
  storageBucket: "aura-dscnsec.appspot.com",
  messagingSenderId: "531877018109",
  appId: "1:531877018109:web:8083ecae1320c762968194",
  measurementId: "G-GY2VW9PYKJ"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};