import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const { firebase } = useContext(FirebaseContext);
  const [user, setUser] = useState(
    // JSON.parse(localStorage.getItem("authUser"))
    firebase.auth().currentUser
  );

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // localStorage.setItem("authUser", JSON.stringify(currentUser));
        setUser(currentUser);
      } else {
        // localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}
