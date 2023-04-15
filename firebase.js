import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBSlyay9kBSlWXF8gQd0dLV5eOFQS42Nw4",
    authDomain: "whatsapp-2-c5785.firebaseapp.com",
    projectId: "whatsapp-2-c5785",
    storageBucket: "whatsapp-2-c5785.appspot.com",
    messagingSenderId: "40286279724",
    appId: "1:40286279724:web:b044512c7af7396833d989"
  };

/*   // Initialize Firebase
const app = initializeApp(firebaseConfig);
//db.initialize
const db = getFirestore(app);

//authenticate
const auth = getAuth(app);

//google auth
const provider = new GoogleAuthProvider();

 */
const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db , auth , provider}
