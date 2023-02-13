import navigationList from "../data/NavigationList";
import { Link } from "react-router-dom";

export const NavButton = () => {
  return (
    <nav className="flex justify-center items-center flex-wrap gap-2 mb-5 ">
      {navigationList.map(({ index, title, link }) => (
        <Link
          to={link}
          className={`rounded-md p-2 min-w-[6rem] text-primary text-sm  grid place-items-center bg-secondary hover:bg-accent hover:text-text hover:tracking-wider tracking-normal focus:bg-accent focus:text-secondary`}
          key={index}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
