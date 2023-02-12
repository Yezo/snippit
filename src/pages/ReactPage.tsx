import { useEffect, useState } from "react";
import Prism from "prismjs";
import { Codeblock } from "../components/Codeblock";
import { Header } from "../components/Header";
import { NavButton } from "../components/NavButton";
import REACTdata from "../data/REACTdata";
import { Searchbar } from "../components/Searchbar";

export const ReactPage = () => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const filtered = REACTdata.filter((x) =>
    x.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <Header title="ReactJS Snippits" />

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
