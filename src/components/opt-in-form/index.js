import React from "react";

import {
  Button,
  Container,
  Input,
  Label,
  Text
} from "./styles/opt-in-formStyles";

export default function OptInForm({ children, handleSubmit, ...restProps }) {
  return (handleSubmit) 
  ? <Container onSubmit={handleSubmit} {...restProps}>{ children }</Container>
  : <Container {...restProps}>{children}</Container>;
}

OptInForm.Input = ({ ...restProps }) => <Input {...restProps} />;

OptInForm.Button = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  )
}

OptInForm.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

OptInForm.Lable = ({ children, ...restProps }) => (
  <Label {...restProps}>{children}</Label>
);
