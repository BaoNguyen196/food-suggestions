import { FirebaseError } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const authProvider = new GoogleAuthProvider();
authProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
authProvider.setCustomParameters({
  login_hint: 'user@example.com',
});

const loginWithPopup = async () => {
  try {
    const auth = getAuth();
    const result = await signInWithPopup(auth, authProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    return {
      user: result.user,
      accessToken: credential?.accessToken,
      idToken: credential?.idToken,
    };
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error?.customData?.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.error({
        errorCode,
        errorMessage,
        email,
        credential,
      });
      throw new Error(error.message);
    } else {
      // Handle any error that is not FirebaseError
      console.error('An unexpected error occurred', error);
    }
  }
};

const logout = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

export { logout, loginWithPopup };
