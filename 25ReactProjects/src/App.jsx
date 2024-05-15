import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <>
      {/* accordian component */}
      {/* <Accordian></Accordian> */}

      {/* random Color component */}
      {/* <RandomColor></RandomColor> */}

      {/* Star rating component */}
      <StarRating noOfStars={10}></StarRating>
    </>
  );
}

export default App;
