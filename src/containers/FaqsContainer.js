import React from "react";

import { Accordion, OptInForm } from "../components";

import faqsData from "../fixtures/faqs.json";

export const FaqsContainer = () => (
  <Accordion>
    <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    {faqsData.map((item) => (
      <Accordion.Item key={item.id}>
        <Accordion.Header>{item.header}</Accordion.Header>
        <Accordion.Body>{item.body}</Accordion.Body>
      </Accordion.Item>
    ))}
    <OptInForm>
      <OptInForm.Input id="email" placeholder="Email Address" />
      <OptInForm.Button type="button">Try it now</OptInForm.Button>
      <OptInForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </OptInForm.Text>
    </OptInForm>
  </Accordion>
);
