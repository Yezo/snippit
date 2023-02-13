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
    <section className="flex flex-col justify-center p-4 ">
      <h2 className="text-lg tracking-tighter font-primary">{title}</h2>
      <pre
        className="w-full cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(snippet);
        }}
      >
        <code className={`language-${language}`}>{`${snippet}`}</code>
      </pre>
    </section>
  );
};
