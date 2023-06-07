import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  arrayUnion,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1njxKno0nCAT_Idwwc3yrJDzHqr8RISY",
  authDomain: "watchtower-db.firebaseapp.com",
  projectId: "watchtower-db",
  storageBucket: "watchtower-db.appspot.com",
  messagingSenderId: "891984209203",
  appId: "1:891984209203:web:acb3c630f8804a3a55ca46",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const addSubscriber = async (email) => {
  try {
    const subscribersRef = doc(db, "subscribers", "emails");
    const docSnapshot = await getDoc(subscribersRef);

    if (docSnapshot.exists()) {
      const existingEmails = docSnapshot.data().emails;
      const updatedEmails = arrayUnion(email);

      await setDoc(subscribersRef, { emails: updatedEmails }, { merge: true });
    } else {
      await setDoc(subscribersRef, { emails: [email] });
    }

    return { success: true, message: "Subscriber added successfully." };
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return { success: false, message: "Failed to add subscriber." };
  }
};

export const addDataToBornAgainCollection = async (data) => {
  try {
    const { name, email, phoneno } = data;

    // Get a reference to the Firestore document
    const bornAgainDocRef = doc(db, "bornagain", "contacts");

    // Get the existing document data
    const docSnapshot = await getDoc(bornAgainDocRef);
    const existingData = docSnapshot.data();

    // Update the list of data with the new entry
    const updatedData = existingData
      ? [...existingData.dataList, { name, phoneno, email }]
      : [{ name, phoneno, email }];

    // Update the document with the updated data list
    await setDoc(bornAgainDocRef, { dataList: updatedData });

    return { success: true };
  } catch (error) {
    console.error("Error adding data:", error);
    return { success: false, error: "Failed to add data." };
  }
};

export default addDataToBornAgainCollection;
