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
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";

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
      {/* <TreeView menus={sideMenu} /> */}

      {/* light and dark theme switch */}
      {/* <LightDarkMode /> */}

      {/* scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* custom tabs compunent */}
      {/* <TabTest /> */}

      {/* custom modal component */}
      {/* <ModalTest /> */}

      {/* github profile finder */}
      {/* <GithubProfileFinder /> */}

      {/* search autocomplete */}
      {/* <SearchAutocomplete /> */}

      {/* tic tac toe */}
      {/* <TicTacToe /> */}

      {/* feature flag implimantation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - custom hook */}
      {/* <UseFetchHookTest /> */}

      {/* use onclick outside hook test */}
      <UseOnclickOutsideTest />
    </>
  );
}

export default App;
