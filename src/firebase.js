import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAF2KFmf9X-Je28uF7gGU3veVvLuTuZ_20",
    authDomain: "link-clone-89c08.firebaseapp.com",
    projectId: "link-clone-89c08",
    storageBucket: "link-clone-89c08.appspot.com",
    messagingSenderId: "390447432892",
    appId: "1:390447432892:web:c64651e02d8555fd437cb9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
// use db much. so default export db
export default db;