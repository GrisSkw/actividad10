import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

//const firebaseConfig = {
//  apiKey: 'AIzaSyD4KaJ-MArSxzaByKuzyaM7QU1rBTRwt78',
//  authDomain: 'actividad-10-utch.firebaseapp.com',
//  databaseURL: 'https://actividad-10-utch-default-rtdb.firebaseio.com',
//  projectId: 'actividad-10-utch',
//  storageBucket: 'actividad-10-utch.appspot.com',
//  messagingSenderId: '912457574451',
//  appId: '1:912457574451:web:27ad1971316a81d0595b46',
//};

const firebaseConfig = {
  apiKey: "AIzaSyAg2gwDYIFHkAdclSzbkpSOhOlFPdFnUTk",
  authDomain: "actividad-10-utch-ok-ab0c2.firebaseapp.com",
  databaseURL: "https://actividad-10-utch-ok-ab0c2-default-rtdb.firebaseio.com",
  projectId: "actividad-10-utch-ok-ab0c2",
  storageBucket: "actividad-10-utch-ok-ab0c2.appspot.com",
  messagingSenderId: "778152185767",
  appId: "1:778152185767:web:d1e9816155584175f2f082"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
