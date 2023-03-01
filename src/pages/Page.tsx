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
  description?: string;
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
    <div className="min-h-screen max-w-4xl mx-auto border-l border-r border-r-slate-800/20 border-l-slate-800/20 px-5 pt-10 ">
      <Header title={heading} />
      <nav>
        <NavButton />
      </nav>

      <Searchbar setSearch={setSearch}></Searchbar>
      <main className="divide-y divide-gray-400 ">
        {filtered &&
          filtered.map(({ index, title, language, snippet, description }) => (
            <Codeblock
              key={index}
              title={title}
              language={language}
              snippet={snippet}
              description={description}
            />
          ))}
      </main>
    </div>
  );
};
