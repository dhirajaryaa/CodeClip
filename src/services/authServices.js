import { auth, googleProvider } from "@/firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

class AuthServices {
  emailPasswordSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      return userCredential.user;
    } catch (error) {
      console.error("Error sign in:", error);
      throw error; // Handle the error appropriately
    }
  };
  googleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);

      return userCredential.user;
    } catch (error) {
      console.error("Error google sign in:", error);
      throw error; // Handle the error appropriately
    }
  };

  emailPasswordSignUp = async (email, password, userName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = userCredential.user;

      await updateProfile(userData, {
        displayName: userName,
      });
      return userData;
    } catch (error) {
      console.error("Error sign up:", error);
      throw error; // Handle the error appropriately
    }
  };

  authObserver = (callback) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User logged in:", user.uid, user.displayName);
        callback(user);
      } else {
        console.log("User not logged in!");
        callback(null);
      }
    });
    return unsubscribe; // Return the unsubscribe function
  };
  

  emailPasswordSignOut = async () => {
    try {
      await signOut(auth);
      return "successful!";
    } catch (error) {
      console.error("Error sign out:", error);
      throw error; // Handle the error appropriately
    }
  };
}

export default new AuthServices();
