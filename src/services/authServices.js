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

  authObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid, user.displayName);
      } else {
        console.log("user not login!");
      }
    });
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
