import { initializeApp } from "firebase/app";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { 
    createUserWithEmailAndPassword,
    getAuth, GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword,
    signInWithPopup, 
    signInWithRedirect, 
    signOut } 
    from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBeSsa-YajzW5-NUtl6OY7QSZYFBfHIjF0",
    authDomain: "e-commerce-test-1cf0e.firebaseapp.com",
    projectId: "e-commerce-test-1cf0e",
    storageBucket: "e-commerce-test-1cf0e.appspot.com",
    messagingSenderId: "18693510729",
    appId: "1:18693510729:web:402f47b5eecb41c11a1198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt:'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)

export const signWithGoogleRedirect = ()=>signInWithRedirect(auth,provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth,additionalInfo)=>{
    if(!userAuth) return;
    const userDocRef = doc (db, 'users',userAuth.uid)
    console.log(userDocRef)
    
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth
        const createdAt = new Date()

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        }catch(error){
            console.log('error creating user',error.message)
        }
    }
    
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;
    console.log(email,password)
    return await createUserWithEmailAndPassword(auth,email,password)
}


export const signInUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;
    console.log(email,password)
    return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async ()=> await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth,callback)

