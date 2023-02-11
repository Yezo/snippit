import { useEffect } from "react";
import Prism from "prismjs";
import navigationList from "../data/NavigationList";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export const HomePage = () => {
  useEffect(() => {
    Prism.highlightAll();
    console.log(navigationList);
  }, []);

  return (
    <div className="page">
      {/* === Header === */}
      <Header
        title="Snippits"
        description="This is a cheatsheet filled with code snippets and various tidbits for front-end developers who happen to have the memory of a goldfish."
      />

      {/* === Navigation === */}
      <nav className="flex flex-col sm:flex-row gap-2 justify-center align-middle items-center h-full">
        {navigationList.map(({ index, title, link }) => (
          <Link
            to={link}
            className={`mt-10 h-28 sm:h-80 sm:w-48 w-80 px-3 py-2 rounded-lg text-secondary bg-text font-bold  hover:bg-zinc-400 hover:text-slate-900 flex items-center justify-center`}
            key={index}
          >
            <a href={link}>{title}</a>
          </Link>
        ))}
      </nav>
    </div>
  );
};
