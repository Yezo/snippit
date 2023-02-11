interface Navigation {
  index: number;
  title: string;
  link: string;
}

const navigationList: Array<Navigation> = [
  {
    index: 1,
    title: "HTML",
    link: "/html",
  },
  {
    index: 2,
    title: "CSS",
    link: "/css",
  },
  {
    index: 3,
    title: "Javascript",
    link: "/javascript",
  },
  {
    index: 4,
    title: "React",
    link: "/react",
  },
  {
    index: 5,
    title: "Typescript",
    link: "/typescript",
  },
];

export default navigationList;
