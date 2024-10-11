import { db } from "@/firebase/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

class UserServices {
  // Add a new user to Firestore
  addUser = async (email, name, photoUrl, uid) => {
    try {
      const res = await setDoc(doc(db, "users", uid), {
        userId: uid,
        name,
        email,
        photoUrl,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      return res;
    } catch (error) {
      console.log("Error adding user to Database:", error);
      throw error;
    }
  };

  // Update an existing user's data
  updateUser = async (email, name, photoUrl, uid) => {
    try {
      const docRef = doc(db, "users", uid);
      const res = await updateDoc(docRef, {
        name,
        email,
        photoUrl,
        updatedAt: serverTimestamp(),
      });
      return res;
    } catch (error) {
      console.log("Error updating user in Database:", error);
      throw error;
    }
  };

  // Retrieve a user's data by their uid
  getUser = async (uid) => {
    try {
      const docRef = doc(db, "users", uid);
      const res = await getDoc(docRef);
      
      if (res.exists()) {
        return res.data(); // Return user data
      } else {
        throw new Error("User not found!");
      }
    } catch (error) {
      console.log("Error fetching user from Database:", error);
      throw error;
    }
  };

  // Delete a user from Firestore
  deleteUser = async (uid) => {
    try {
      const docRef = doc(db, "users", uid);
      const res = await deleteDoc(docRef);
      return res;
    } catch (error) {
      console.log("Error deleting user from Database:", error);
      throw error;
    }
  };
}

export default new UserServices();
