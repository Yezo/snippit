import { useEffect, useState } from "react";
import Prism from "prismjs";
import { Codeblock } from "../components/Codeblock";
import { Header } from "../components/Header";
import { NavButton } from "../components/NavButton";
import TYPESCRIPTdata from "../data/TYPESCRIPTdata";
import { Searchbar } from "../components/Searchbar";

export const TypescriptPage = () => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const filtered = TYPESCRIPTdata.filter((x) =>
    x.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <header>
        <Header title="Typescript Snippits" />
        <NavButton />
      </header>

      <Searchbar setSearch={setSearch}></Searchbar>
      <main>
        {filtered.map(({ index, title, language, snippet }) => (
          <Codeblock
            key={index}
            title={title}
            language={language}
            snippet={snippet}
          />
        ))}
      </main>
    </div>
  );
};
