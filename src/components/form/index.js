import React from "react";
import {
  Container,
  ErrorMsg,
  Input,
  Label,
  Link,
  Submit,
  Text,
  Title
} from "./styles/formStyles";

export default function Form({ children, handleSubmit, ...restProps }) {
  return (
    <Container onSubmit={handleSubmit} {...restProps}>
      {children}
    </Container>
  );
}

Form.Input = ({ ...restProps }) => <Input {...restProps} />;

Form.Submit = ({ children, ...restProps }) => (
  <Submit {...restProps}>{children}</Submit>
);

Form.ErrorMsg = ({ children, ...restProps }) => (
  <ErrorMsg {...restProps}>{children}</ErrorMsg>
);

Form.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Form.Label = ({ children, ...restProps }) => (
  <Label {...restProps}>{children}</Label>
);

Form.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

Form.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
);
