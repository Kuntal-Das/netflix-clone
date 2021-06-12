import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import { FirebaseContext } from "./context/firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCleiwTPkpprInQo0jrUdLqkrRcBzplsgs",
  authDomain: "animesta-bd102.firebaseapp.com",
  projectId: "animesta-bd102",
  storageBucket: "animesta-bd102.appspot.com",
  messagingSenderId: "129360534327",
  appId: "1:129360534327:web:71266b4d7dabfa895a18b2",
  measurementId: "G-MCEXZ5C34X"
}
// Initialize Firebase
const firebase = window.firebase.initializeApp(config);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
