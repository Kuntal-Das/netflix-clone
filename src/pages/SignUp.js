import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Hero } from "../components";
import { SIGN_IN, BROWSE } from "../constants/routes";
import { FooterContainer } from "../containers/FooterContainer";
import { HeaderContainer } from "../containers/HeaderContainer";

import { FirebaseContext } from "../context/firebase";

export default function SignUp() {
  const searchQueryStr = (str, key) =>{
    let res = ""
    if(str){
      let reslist = str.split(`${key}=`)
      res = reslist[reslist.length-1].split("&")[0]
    }
    return res
  }
  const { firebase } = useContext(FirebaseContext);

  const history = useHistory();
  const email = searchQueryStr(history.location.search,"email");

  const [formData, setFormData] = useState({
    firstName: email.split("@")[0],
    emailAddress: email,
    password: ""
  });

  const [error, setError] = useState("");

  const isInvalid =
    formData.firstName === "" ||
    formData.password === "" ||
    formData.emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();
    if (isInvalid) {
      setError("Opps something unexpected happend");
      return;
    }
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(
            formData.emailAddress,
            formData.password
          );
      })
      .then((userCredential) => {
        userCredential.user
          .updateProfile({
            displayName: formData.firstName,
            photoURL: `./images/users/${Math.floor(Math.random() * 5) + 1}.png`
          })
          .then(() => {
            history.push(BROWSE);
          });
      })
      .catch((err) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: ""
        }));
        setError(`${err.message}, error code: ${err.code}`);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <>
      <HeaderContainer />
      <Hero>
        <Hero.Container>
          <Form handleSubmit={handleSignup} method="POST">
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.ErrorMsg>{error}</Form.ErrorMsg>}
    
            <Form.Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
            <Form.Input
              name="emailAddress"
              placeholder="Email Address"
              value={formData.emailAddress}
              onChange={handleChange}
            />
            <Form.Input
              name="password"
              type="password"
              value={formData.password}
              autoComplete="off"
              placeholder="Password"
              onChange={handleChange}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
    
            <Form.Text>
              Already a user? <Form.Link to={SIGN_IN}>Sign In now.</Form.Link>
            </Form.Text>
            <Form.Text small>
              This page is protected by Google reCAPTCHA.
            </Form.Text>
          </Form>
        </Hero.Container>
      </Hero>
      <FooterContainer />
    </>
  );
}
