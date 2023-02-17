import { Link } from "react-router-dom";

type Props = {
  title: string;
  description?: string;
};

export const Header = ({ title, description }: Props) => {
  return (
    <div className="mt-10 grid place-items-center ">
      <h1 className="flex items-center justify-center text-7xl font-heading text-text">
        <Link to="/">{title}</Link>
      </h1>
      <p className=" max-w-[50ch] mt-7 text-center tracking-tighter opacity-75 font-primary">
        {description}
      </p>
    </div>
  );
};
