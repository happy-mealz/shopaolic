import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCBxXo3oczKhT0G08R26FqQZrb4YwpQUAk",
    authDomain: "shopaolic-db.firebaseapp.com",
    databaseURL: "https://shopaolic-db.firebaseio.com",
    projectId: "shopaolic-db",
    storageBucket: "shopaolic-db.appspot.com",
    messagingSenderId: "3335103566",
    appId: "1:3335103566:web:81ea1ed7eb240ec09e8f1f",
    measurementId: "G-8TKLMNMTL0"
  };

  export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists)
    {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{

        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(err)
      {
        console.log(err);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp:'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);

  export default firebase;