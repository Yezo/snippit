interface Props {
  language: string;
}

export const LanguageCard = ({ language }: Props) => {
  return <div>{language}</div>;
};
