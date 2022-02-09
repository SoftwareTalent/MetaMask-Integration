import React from "react";
import Navigation from "../../Components/Navigation";
import "./Home.css";
import Mint from "./Mint";

import { ScrollingProvider } from "react-scroll-section";

export default function Home() {
  return (
    <React.Fragment>
      <ScrollingProvider>
        <Navigation />
        <Mint />
      </ScrollingProvider>
    </React.Fragment>
  );
}
