import { Link } from "react-router-dom";

type Props = {
  title: string;
  description?: string;
};

export const Header = ({ title, description }: Props) => {
  return (
    <header className="grid place-items-center gap-5">
      <Link to="/">
        <h1 className="text-7xl font-heading text-text">{title}</h1>
      </Link>
      <p className="max-w-[50ch] text-center tracking-tight opacity-90">
        {description}
      </p>
    </header>
  );
};
