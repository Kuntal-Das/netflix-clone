import React from "react";
import { useContent } from "../hooks";
import { BrowseContainer } from "../containers/BrowseContainer";
import { selectionMap } from "../utils";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  // console.log(`Series : ${series}`);
  // console.log("\n\n");
  // console.log(`Films : ${films}`);

  const slides = selectionMap({ series, films });

  console.log("\n\n");
  console.log(slides);

  return <BrowseContainer slides={slides} />;
}
