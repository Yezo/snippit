import navigationList from "../data/NavigationList";
import { Link } from "react-router-dom";

export const NavButton = () => {
  return (
    <nav className="flex justify-center items-center flex-wrap gap-2 mb-1 ">
      {navigationList.map(({ index, title, link }) => (
        <Link
          to={link}
          className={`inline-flex items-center justify-center rounded border-2 border-[#171515] bg-[#171515] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:bg-primary focus:text-secondary min-w-[6.5rem] `}
          key={index}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
