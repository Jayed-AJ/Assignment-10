import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, 
    updateProfile} from "firebase/auth";


const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword (auth,email,password)
    }
    
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const updateUser = (profile) => {
        return updateProfile(auth.currentUser,profile)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            setLoading(false);
            setUser(currentUser);
        })
        return () => {
            unSubscribe()
        }
    },[])

    const userInfo = {
        createUser,
        signInUser,
        signInGoogle,
        user,
        signOutUser,
        loading,
        setLoading,
        updateUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;