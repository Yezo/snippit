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
    <div className="px-4 w-full sm:w-10/12 md:w-9/12 lg:w-6/12 xl:w-5/12 min-h-screen flex flex-col mx-auto text-text font-primary font-medium">
      <header>
        <Header title={heading} />
        <NavButton />
      </header>

      <Searchbar setSearch={setSearch}></Searchbar>
      <main className="divide-y divide-gray-400">
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
