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
import userServices from "./userServices";

class AuthServices {
  // Sign in with email and password
  emailPasswordSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await userServices.getUser(userCredential.user.uid);

      console.log(user);
      return { ...userCredential.user, ...user };
    } catch (error) {
      console.error("Error during email sign-in:", error);
      throw error;
    }
  };

  // Sign in with Google
  googleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const { email, displayName: name, photoURL, uid } = userCredential.user;

      await userServices.addUser(email, name, photoURL, uid);
      return userCredential.user;
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      throw error;
    }
  };

  // Sign up with email and password
  emailPasswordSignUp = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { photoURL, uid } = userCredential.user;

      await userServices.addUser(email, name, photoURL, uid);
      const updatedUser = await this.updateUserProfile(name);

      return updatedUser;
    } catch (error) {
      console.error("Error during sign-up:", error);
      throw error;
    }
  };

  // Update user profile (name)
  updateUserProfile = async (name) => {
    try {
      const { email, photoURL, uid } = auth.currentUser;

      await userServices.updateUser(email, name, photoURL, uid);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      return { ...auth.currentUser, displayName: name };
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  };

  updateUserProfile = async (name) => {
    try {
      // Check if the current user exists
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error("No authenticated user found.");
      }
  
      const { email, photoURL, uid } = currentUser;
  
      // Ensure name is not undefined
      if (!name) {
        throw new Error("Name is required to update profile.");
      }
  
      // Update Firestore user document
      await userServices.updateUser(email, name, photoURL || "", uid);
  
      // Update Firebase Auth profile
      await updateProfile(currentUser, {
        displayName: name,
      });
  
      return { ...currentUser, displayName: name };
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  };
  

  // Remove user (account deletion)
  removeUser = async () => {
    try {
      const userId = auth.currentUser.uid;
      await deleteUser(auth.currentUser);
      await userServices.deleteUser(userId);

      return "User successfully removed!";
    } catch (error) {
      console.error("Error removing user:", error);
      throw error;
    }
  };

  // Firebase authentication state observer
  authObserver = (callback) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        callback(user);
      } else {
        console.log("No user is logged in!");
        callback(null);
      }
    });

    return unsubscribe; // Unsubscribe when needed to avoid memory leaks
  };

  // Sign out the current user
  userSignOut = async () => {
    try {
      await signOut(auth);
      return "User signed out successfully!";
    } catch (error) {
      console.error("Error during sign out:", error);
      throw error;
    }
  };
}

export default new AuthServices();
