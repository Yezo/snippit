import { useEffect } from "react";
import Prism from "prismjs";
import navigationList from "../data/NavigationList";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

//TODO make a page component that takes props cuz fuck maintaining all these pages indiivudally
//TODO re-create codeblock + give it its own toggle state so it rmbrs itself
export const HomePage = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="page">
      {/* === Header === */}
      <header>
        <Header
          title="Snippits"
          description="This is a cheatsheet filled with code snippets and various tidbits for front-end developers who happen to have the memory of a goldfish."
        />
      </header>

      {/* === Navigation === */}
      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 justify-center align-middle items-center h-full mt-6">
        {navigationList.map(({ index, title, link, imgURL }) => (
          <Link to={link} key={index} className="group relative block h-60">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full transform items-end border-2 border-secondary bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0 ">
                <span className="max-w-[40px]">
                  <img src={imgURL} className="max-w-[40px]"></img>
                </span>

                <h2 className="mt-4 text-2xl font-medium tracking-wide">
                  {title}
                </h2>
              </div>

              <div
                className={`absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 `}
              >
                <h3 className="mt-4 text-2xl font-[600] tracking-wide uppercase font-inter">
                  {title}
                </h3>

                <p className="mt-4  text-[0.925rem] tracking-normal font-inter">
                  Explore a wide variety of code snippets and other useful tips
                  and tricks for {title}.
                </p>

                <button className="inline-flex items-center justify-center rounded border-2 border-[#171515] bg-[#171515] px-2 py-1 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:bg-primary focus:text-secondary min-w-[6.5rem] mt-4">
                  Visit Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};
