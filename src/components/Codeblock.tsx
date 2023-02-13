import { useState, useEffect } from "react";
import Prism from "prismjs";

interface Props {
  title: string;
  language: string;
  snippet: string;
}

export const Codeblock = ({ title, language, snippet }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);

  function handleToggle() {
    !toggle ? setToggle(true) : setToggle(false);
  }
  useEffect(() => {
    Prism.highlightAll();
  }, [toggle]);

  useEffect(() => {
    setToggle(false);
  }, [title]);

  return (
    <section className="flex flex-col justify-center">
      <div
        className="flex justify-between w-full cursor-pointer p-4"
        onClick={handleToggle}
      >
        <h2 className="text-lg tracking-tighter font-primary select-none">
          {title}
        </h2>
        <span className="grid place-items-center pr-5 text-secondary">
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-dash-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          )}
        </span>
      </div>

      {toggle && (
        <pre className="w-full ">
          <code className={`language-${language}`}>{`${snippet}`}</code>
        </pre>
      )}
    </section>
  );
};
