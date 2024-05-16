import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import sideMenu from "./components/tree-view/data";

function App() {
  return (
    <>
      {/* accordian component */}
      {/* <Accordian></Accordian> */}

      {/* random Color component */}
      {/* <RandomColor></RandomColor> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={10}></StarRating> */}

      {/* image Slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* load more Product component */}
      {/* <LoadMoreData /> */}

      {/* treeview component/ menu UI component/ recursive navigation menu */}
      <TreeView menus={sideMenu} />
    </>
  );
}

export default App;
