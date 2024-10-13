import { db } from "@/firebase/firebase";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore";

class SnippetServices {
  // Add snippet to the database
  addSnippet = async (data) => {
    try {      
      const collectionRef = collection(db, "snippets");

      // Use addDoc to add a new document with auto-generated ID
      const res = await addDoc(collectionRef, { ...data });

      return res; // Returns document reference
    } catch (error) {
      console.error("Error adding snippet to Database:", error);
      throw error;
    }
  };

  // Update a snippet in the database
  updateSnippet = async (docId, data) => {
    try {
      // Use doc() to reference the specific document by ID
      const docRef = doc(db, "snippets", docId);

      // Use updateDoc to update specific fields
      await updateDoc(docRef, data);

      return "Snippet updated successfully!";
    } catch (error) {
      console.error("Error updating snippet in Database:", error);
      throw error;
    }
  };

  // Remove a snippet from the database
  removeSnippet = async (docId) => {
    try {
      // Use doc() to reference the specific document by ID
      const docRef = doc(db, "snippets", docId);

      // Use deleteDoc to delete the document
      await deleteDoc(docRef);

      return "Snippet removed successfully!";
    } catch (error) {
      console.error("Error removing snippet from Database:", error);
      throw error;
    }
  };

  // Get all snippets from the database
  getSnippet = async (docId) => {
    try {
      // Use doc() to reference the specific document by ID
      const docRef = doc(db, "snippets", docId);

      // Use getDoc to retrieve data from the collection
      const res = await getDoc(docRef);

      if (res.exists()) {
        return { id: res.id, ...res.data() }; // Return user data
      } else {
        throw new Error("data not found!");
      }

      // return { id: data.id, ...data.data() }; // Return array of snippet
    } catch (error) {
      console.error("Error retrieving snippet from Database:", error);
      throw error;
    }
  };
  // Get all snippets from the database
  getSnippets = async () => {
    try {
      const collectionRef = collection(db, "snippets");

      // Use getDocs to retrieve all documents from the collection
      const snapshot = await getDocs(collectionRef);

      // Map the results to an array of snippet objects
      const snippets = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return snippets; // Return array of snippets
    } catch (error) {
      console.error("Error retrieving snippets from Database:", error);
      throw error;
    }
  };

  // Get specific user all snippets from the database
  getUserSnippets = async (uid) => {
    try {
      const collectionRef = collection(db, "snippets");
      // make a query for matching userId then give data 
      const query = query(collectionRef,where("userId","==",uid));

      // Use getDocs to retrieve all documents from the collection
      const snapshot = await getDocs(query);

      // Map the results to an array of snippet objects
      const snippets = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return snippets; // Return array of snippets
    } catch (error) {
      console.error("Error retrieving snippets from Database:", error);
      throw error;
    }
  };
}

export default new SnippetServices();
