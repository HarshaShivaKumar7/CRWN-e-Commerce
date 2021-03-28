import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBcSN5FIK1_cnlLsQCaI_cxXvDRCUaII9s",
    authDomain: "crwn-7268b.firebaseapp.com",
    projectId: "crwn-7268b",
    storageBucket: "crwn-7268b.appspot.com",
    messagingSenderId: "728960427010",
    appId: "1:728960427010:web:aad40206c9f3f44f22331b",
    measurementId: "G-RT1LJK71Y0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("Error in creating user", error.message);
        }
    }

    return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
