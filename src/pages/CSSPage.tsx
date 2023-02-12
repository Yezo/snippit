import { useState, useEffect } from "react";
import Prism from "prismjs";
import { Codeblock } from "../components/Codeblock";
import { Header } from "../components/Header";
import { NavButton } from "../components/NavButton";
import { Searchbar } from "../components/Searchbar";
import CSSdata from "../data/CSSdata";

export const CSSPage = () => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const filtered = CSSdata.filter((x) =>
    x.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <Header title="CSS Snippits" />

      <NavButton />

      <Searchbar setSearch={setSearch}></Searchbar>

      <div>
        {filtered.map(({ index, title, language, snippet }) => (
          <Codeblock
            key={index}
            title={title}
            language={language}
            snippet={snippet}
          />
        ))}
      </div>
    </div>
  );
};
