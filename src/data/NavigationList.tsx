interface Navigation {
  index: number;
  title: string;
  link: string;
  imgURL: string;
}

//GET ICONS FROM: https://iconscout.com/icon/typescript-3521774

const navigationList: Array<Navigation> = [
  {
    index: 1,
    title: "HTML",
    link: "/html-snippets",
    imgURL:
      "https://cdn.iconscout.com/icon/free/png-512/html-2752158-2284975.png?f=avif&w=256",
  },
  {
    index: 2,
    title: "CSS",
    link: "/css-snippets",
    imgURL: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    index: 3,
    title: "Javascript",
    link: "/javascript-snippets",
    imgURL:
      "https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png?f=avif&w=256",
  },
  {
    index: 4,
    title: "React",
    link: "/react-snippets",
    imgURL:
      "https://cdn.iconscout.com/icon/free/png-512/react-3-1175109.png?f=avif&w=256",
  },
  {
    index: 5,
    title: "Typescript",
    link: "/typescript-snippets",
    imgURL:
      "https://cdn.iconscout.com/icon/free/png-512/typescript-3521774-2945272.png?f=avif&w=256",
  },
];

export default navigationList;
