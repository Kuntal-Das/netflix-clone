import React from "react";
import {
  LockBody,
  Picture,
  ReleaseBody,
  Spinner
} from "./styles/loadingStyles";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={src} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
