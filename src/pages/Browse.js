import React from "react";
import { useContent } from "../hooks";
import { BrowseContainer } from "../containers/BrowseContainer";
import { selectionMap } from "../utils";

export default function Browse({user}) {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionMap({ series, films });

  return <BrowseContainer slides={slides} user={user}/>;
}
