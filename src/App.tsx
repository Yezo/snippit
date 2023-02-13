import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Page } from "./pages/Page";
import HTMLdata from "./data/HTMLdata";
import CSSdata from "./data/CSSdata";
import JSdata from "./data/JSdata";
import REACTdata from "./data/REACTdata";
import TYPESCRIPTdata from "./data/TYPESCRIPTdata";

function App() {
  return (
    <div className="bg-primary text-zinc-800 font-primary tracking-tighter">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/html-snippets"
          element={<Page data={HTMLdata} heading="HTML Snippets" />}
        ></Route>
        <Route
          path="/css-snippets"
          element={<Page data={CSSdata} heading="CSS Snippets" />}
        ></Route>
        <Route
          path="/javascript-snippets"
          element={<Page data={JSdata} heading="Javascript Snippets" />}
        ></Route>
        <Route
          path="/react-snippets"
          element={<Page data={REACTdata} heading="ReactJS Snippets" />}
        ></Route>
        <Route
          path="/typescript-snippets"
          element={<Page data={TYPESCRIPTdata} heading="Typescript Snippets" />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
