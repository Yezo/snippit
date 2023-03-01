import { Link } from "react-router-dom";
import navigationList from "../data/NavigationList";

export const HomePage = () => {
  return (
    <div className="min-h-screen max-w-4xl mx-auto border-l border-r border-r-slate-800/20 border-l-slate-800/20 px-5 pt-10">
      <header className="grid place-items-center gap-5">
        <Link to="/">
          <h1 className="text-7xl font-heading text-text">Snippits</h1>
        </Link>
        <p className="max-w-[50ch] text-center tracking-tight opacity-90">
          This is a cheatsheet filled with code snippets and various tidbits for
          front-end developers who happen to have the memory of a goldfish.
        </p>
      </header>

      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 justify-center align-middle items-center h-full mt-6">
        {navigationList.map(({ index, title, link, imgURL }) => (
          <Link to={link} key={index} className="group relative block h-60">
            <div className=" shadow-md relative flex h-full transform items-end border border-secondary/50 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
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
                <h3 className="mt-4 text-2xl font-[600] tracking-wide uppercase font-primary">
                  {title}
                </h3>

                <p className="mt-4  text-[0.925rem] tracking-normal font-primary">
                  Explore a wide variety of code snippets and other useful tips
                  for {title}.
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
