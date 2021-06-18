import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(collectionName) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(collectionName)
      .get()
      .then((querySnapshot) => {
        const allContent = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id
        }));

        setContent(allContent);
      })
      .catch((err) => console.log(`${err.message} code:${err.code}`));
  }, []);
  
  return { [collectionName]: content };
}
