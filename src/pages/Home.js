import React from "react";

import JumbotronContainer from "../containers/JumbotronContainer";
import FooterContainer from "../containers/FooterContainer";
import FaqsContainer from "../containers/FaqsContainer";
import HeaderContainer from "../containers/HeaderContainer";
import { Feature, OptInForm } from "../components";

export default function Home(props) {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptInForm>
            <OptInForm.Input placeholder="Email Address" />
            <OptInForm.Button>Try it now</OptInForm.Button>
            <OptInForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptInForm.Text>
          </OptInForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
