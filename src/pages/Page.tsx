import Prism from "prismjs";
import { useEffect, useState } from "react";
import { Codeblock } from "../components/Codeblock";
import { Header } from "../components/Header";
import { NavButton } from "../components/NavButton";
import { Searchbar } from "../components/Searchbar";

type dataType = {
  index: number;
  title: string;
  language: string;
  snippet: string;
};
type Props = {
  data: dataType[];
  heading: string;
};

export const Page = ({ data, heading }: Props) => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    Prism.highlightAll();
  }, [data]);

  const filtered = data.filter((x) =>
    x.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <header>
        <Header title={heading} />
        <NavButton />
      </header>

      <Searchbar setSearch={setSearch}></Searchbar>
      <main className="divide-y divide-gray-500">
        {filtered &&
          filtered.map(({ index, title, language, snippet }) => (
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
