import { auth, googleProvider } from './firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    return { user };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;

    console.error("SignIn Error: ", errorCode, errorMessage, email);
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("SignOut Error", error);
  }
};
