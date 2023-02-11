import navigationList from "../data/NavigationList";
import { Link } from "react-router-dom";

export const NavButton = () => {
  return (
    <div>
      <nav className="flex justify-center items-center flex-wrap gap-2 mb-5 ">
        {navigationList.map(({ index, title, link }) => (
          <Link
            to={link}
            className={`rounded-md p-2 min-w-[6rem] text-white text-sm font-bold grid place-items-center bg-secondary hover:ring-2 ring-secondary hover:bg-text hover:text-secondary hover:tracking-wider tracking-normal focus:bg-text`}
            key={index}
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
};
