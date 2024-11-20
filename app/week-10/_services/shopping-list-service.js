import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const itemsRef = collection(db, "shopping-list", userId, "items");
    const itemsSnapshot = await getDocs(itemsRef);

    const mappedItems = itemsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return mappedItems;
  } catch (error) {
    console.error("Error in getItems: ", error);
  }
};

export const addItem = async (userId, item) => {
  try {
    const itemsRef = await collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error in addItem: ", error);
  }
};

// export const updateItem = async (id, item) => {
//   try {
//     const docRef = await collection(db, "users", userId, "items");
//     await updateDoc(docRef, item);
//   } catch (error) {
//     console.error("Error in updateItem: ", error);
//   }
// };

// export const deleteItem = async (id) => {
//   try {
//     const docRef = await collection(db, "users", userId, "items");
//     await deleteDoc(docRef);
//   } catch (error) {
//     console.error("Error in deleteItem: ", error);
//   }
// };
