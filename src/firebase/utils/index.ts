/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, getDocs, doc, setDoc, getDoc, addDoc } from 'firebase/firestore';
import { db } from '#/boot/firebase';

export const getDocument = async (collectionName: string, documentName: string) => {
  const docRef = doc(db, collectionName, documentName);
  const docSnap = await getDoc(docRef);
  return docSnap.data() ?? null;
};

export const addDocument = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getCollection = async (path: string) => {
  const querySnapshot = await getDocs(collection(db, path));
  const data: any = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};
