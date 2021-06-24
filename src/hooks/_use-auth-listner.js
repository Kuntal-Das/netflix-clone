import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function _useAuthListener() {
  const { firebase } = useContext(FirebaseContext);
  const [user, setUser] = useState(firebase.auth().currentUser);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return { user };
}
