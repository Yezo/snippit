import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Page } from "./pages/Page";
import CSSdata from "./data/CSSdata";
import JSdata from "./data/JSdata";
import REACTdata from "./data/REACTdata";
import TYPESCRIPTdata from "./data/TYPESCRIPTdata";
import GITdata from "./data/GITdata";

function App() {
  return (
    <div className="bg-primary text-text font-primary ">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/css-snippets"
          element={<Page data={CSSdata} heading="CSS Snippits" />}
        ></Route>
        <Route
          path="/javascript-snippets"
          element={<Page data={JSdata} heading="Javascript Snippits" />}
        ></Route>
        <Route
          path="/react-snippets"
          element={<Page data={REACTdata} heading="ReactJS Snippits" />}
        ></Route>
        <Route
          path="/typescript-snippets"
          element={<Page data={TYPESCRIPTdata} heading="Typescript Snippits" />}
        ></Route>
        <Route
          path="/git-snippets"
          element={<Page data={GITdata} heading="Git Snippits" />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
