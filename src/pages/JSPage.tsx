import { useEffect, useState } from "react";
import Prism from "prismjs";
import { Codeblock } from "../components/Codeblock";
import { Header } from "../components/Header";
import { NavButton } from "../components/NavButton";
import JSdata from "../data/JSdata";
import { Searchbar } from "../components/Searchbar";

export const JSPage = () => {
  const [search, setSearch] = useState("");
  const filtered = JSdata.filter((x) => x.title.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="page">
      <Header title="Javascript Snippits" />

      <NavButton />

      <Searchbar setSearch={setSearch}></Searchbar>
      <div>
        {filtered.map(({ index, title, language, snippet }) => (
          <Codeblock key={index} title={title} language={language} snippet={snippet} />
        ))}
      </div>
    </div>
  );
};
