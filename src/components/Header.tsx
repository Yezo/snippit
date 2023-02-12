import { Link } from "react-router-dom";

interface Props {
  title: string;
  description?: string;
}

export const Header = ({ title, description }: Props) => {
  return (
    <div className="mt-10 grid place-items-center ">
      <h1 className="flex items-center justify-center text-6xl font-bold tracking-wider font-secondary text-text">
        <Link to="/">{title}</Link>
      </h1>
      <p className=" max-w-[50ch] mt-7 text-center tracking-tight opacity-75 text-[0.95rem]">
        {description}
      </p>
    </div>
  );
};
