import { auth } from "@/firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

class AuthServices {
  signIn = async (email, password) => {
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

  signUp = async (email, password, userName) => {
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

  signOut = async () => {
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
