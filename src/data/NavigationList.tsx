interface Navigation {
  index: number;
  title: string;
  link: string;
}

const navigationList: Array<Navigation> = [
  {
    index: 1,
    title: "HTML",
    link: "/html-snippets",
  },
  {
    index: 2,
    title: "CSS",
    link: "/css-snippets",
  },
  {
    index: 3,
    title: "Javascript",
    link: "/javascript-snippets",
  },
  {
    index: 4,
    title: "React",
    link: "/react-snippets",
  },
  {
    index: 5,
    title: "Typescript",
    link: "/typescript-snippets",
  },
];

export default navigationList;
