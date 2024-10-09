import { auth, googleProvider } from "@/firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  deleteUser,
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

  emailPasswordSignUp = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const data = userCredential.user;

      const userData = this.updateUserProfile(name)
      return userData;
    } catch (error) {
      console.error("Error sign up:", error);
      throw error; // Handle the error appropriately
    }
  };

  updateUserProfile = async (user,name) => {
    try {
      
     const userData =  await updateProfile(auth.currentUser, {
        displayName: name,
      });
      return userData;
    } catch (error) {
      console.error("Error update profile:", error);
      throw error; // Handle the error appropriately
    }
  };

  removeUser = async () => {
    try {
      
      await deleteUser(auth.currentUser);
      return "successful!";
    } catch (error) {
      console.error("Error remove user:", error);
      throw error; // Handle the error appropriately
    }
  };

  authObserver = (callback) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("User logged in:", user.uid, user.displayName);
        callback(user);
      } else {
        console.log("User not logged in!");
        callback(null);
      }
    });
    return unsubscribe; // Return the unsubscribe function
  };
  

  userSignOut = async () => {
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
