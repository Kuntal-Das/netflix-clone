import React, { useState } from "react";
import { Form } from "../components";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import { SIGN_UP } from "../constants/routes";

export default function SignIn({ children, ...restProps }) {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const isInValid = formData.email.length < 3 || formData.password.length < 8;

  const handleSignIn = (e) => {
    e.preventDefault();
    if (isInValid) {
      console.log("success");
    }
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
      <HeaderContainer style={{ minHeight: "100vh" }}>
        <Form handleSubmit={handleSignIn} method="POST">
          <Form.Title>Sign In</Form.Title>
          {error && <Form.ErrorMsg>{error}</Form.ErrorMsg>}
          <Form.Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email address"
          />
          <Form.Input
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="off"
            type="password"
            placeholder="Password"
          />
          <Form.Submit disabled={isInValid} type="submit">
            Sign In
          </Form.Submit>

          <Form.Text>
            New to Netflix?
            <Form.Link to={SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.Text small>
            This page is protected by Google reCAPTCHA.
          </Form.Text>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
