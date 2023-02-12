import Prism from "prismjs";
import HTMLdata from "../data/HTMLdata";
import { useEffect, useState } from "react";
import { Codeblock } from "../components/Codeblock";
import { Header } from "../components/Header";
import { NavButton } from "../components/NavButton";
import { Searchbar } from "../components/Searchbar";

export const HTMLPage = () => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const filtered = HTMLdata.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <Header title="HTML Snippits" />

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
