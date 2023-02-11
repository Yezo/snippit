import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HTMLPage } from "./pages/HTMLPage";
import { HomePage } from "./pages/HomePage";
import { CSSPage } from "./pages/CSSPage";
import { JSPage } from "./pages/JSPage";
import { ReactPage } from "./pages/ReactPage";
import { TypescriptPage } from "./pages/TypescriptPage";

function App() {
  return (
    <div className="bg-primary text-zinc-800 font-primary tracking-tighter">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/html" element={<HTMLPage />}></Route>
        <Route path="/css" element={<CSSPage />}></Route>
        <Route path="/javascript" element={<JSPage />}></Route>
        <Route path="/react" element={<ReactPage />}></Route>
        <Route path="/typescript" element={<TypescriptPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
