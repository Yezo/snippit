import navigationList from "../data/NavigationList";
import { Link } from "react-router-dom";

export const NavButton = () => {
  return (
    <nav className="flex justify-center items-center flex-wrap gap-2 mb-1 ">
      {navigationList.map(({ index, title, link }) => (
        <Link
          to={link}
          className={`inline-flex items-center justify-center rounded border-2 border-[#171515] bg-[#171515] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:bg-primary focus:text-secondary active:opacity-75 min-w-[6.5rem] `}
          key={index}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
// inline-flex items-center rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75

// rounded-md p-2 min-w-[6rem] text-primary text-sm select-none grid place-items-center bg-secondary hover:bg-accent hover:text-text hover:tracking-wider tracking-normal focus:bg-accent focus:text-secondary
