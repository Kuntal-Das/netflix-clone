import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import { Feature, Hero, OptInForm } from "../components";
import { SIGN_UP } from "../constants/routes";
import { FaqsContainer } from "../containers/FaqsContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { HeaderContainer } from "../containers/HeaderContainer";
import { JumbotronContainer } from "../containers/JumbotronContainer";

export default function Home() {
  const [optInFormData, setOptInFormData] = useState({
    email:"",
  })
  const hist = useHistory()

  const handleChange = (e) => {
    const {name, value} = e.target
    setOptInFormData(prevData => ({
      ...prevData,
      [name] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(optInFormData.length < 5) return
    hist.push(`${SIGN_UP}?email=${optInFormData.email}`)
    window.scrollTo({top: 0});
  }

  return (
    <>
      <HeaderContainer />
      <Hero>
        <Hero.Container>
          <Feature>
            <Feature.Title>
              Unlimited films, TV programmes and more.
            </Feature.Title>
            <Feature.SubTitle>
              Watch anywhere. Cancel at any time.
            </Feature.SubTitle>
            <OptInForm handleSubmit={handleSubmit}>
              <OptInForm.Input
               name="email"
               value={optInFormData.email}
               onChange={handleChange}
               type="email" 
               required
               placeholder="Email Address" />
              <OptInForm.Button>
                Try it now
              </OptInForm.Button>
              <OptInForm.Text>
                Ready to watch? Enter your email to create or restart your
                membership.
              </OptInForm.Text>
            </OptInForm>
          </Feature>
        </Hero.Container>
      </Hero>
      <JumbotronContainer />
      <FaqsContainer 
        name="email" 
        handleSubmit={handleSubmit} 
        optInFormData={optInFormData.email} 
        handleChange={handleChange}
        />
      <FooterContainer />
    </>
  );
}
