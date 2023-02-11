import { useEffect } from "react";
import Prism from "prismjs";

interface Props {
  title: string;
  language: string;
  snippet: string;
}

export const Codeblock = ({ title, language, snippet }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="flex flex-col justify-center mb-8  pt-4 pb-2 px-4 bg-secondary rounded lg:p-4">
      <h2 className="font-bold text-lg tracking-tight">{title}</h2>
      <pre
        className="w-full cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(snippet);
        }}
      >
        <code className={`language-${language}`}>{`${snippet}`}</code>
      </pre>
    </div>
  );
};
