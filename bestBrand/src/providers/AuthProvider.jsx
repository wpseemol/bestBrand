import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import auth from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true);
    const [cardItemLength, setCardItemLength] = useState(0); // card item length show on top

    // created account
    const singUp = (email, password) => {
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // login account
    const singIn = (siEmail, siPassword) => {
        SetLoading(true);
        return signInWithEmailAndPassword(auth, siEmail, siPassword);
    };

    const logInGoogle = () => {
        signInWithPopup(auth, googleProvider);
    };

    //login chake
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            SetLoading(false);
        });

        return () => {
            unSubscribe();
        };
    }, []);

    //logOut function
    const logOut = () => {
        SetLoading(true);
        return signOut(auth);
    };

    const loginAndRegInfo = {
        user,
        singUp,
        singIn,
        logOut,
        loading,
        logInGoogle,
        cardItemLength,
        setCardItemLength,
    };
    return (
        <AuthContext.Provider value={loginAndRegInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
