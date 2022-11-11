import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,
    getAuth,
    signInWithPopup, 
    onAuthStateChanged, 
    updateProfile ,
    signOut,
    signInWithEmailAndPassword
    } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = (googleAuthProvider) =>{
        return signInWithPopup(auth, googleAuthProvider)
    }

    const githubSignIn = (githubAuthProvider) =>{
        return signInWithPopup(auth, githubAuthProvider)
    }

    const register = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserNameImg = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            return unSubscribe();
        }
    } ,[])

    const authInfo = {register,updateUserNameImg, logIn, googleSignIn, githubSignIn, user, loading, setLoading, logOut};
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;