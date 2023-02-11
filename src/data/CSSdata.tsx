interface CSSPage {
  index: number;
  title: string;
  language: string;
  snippet: string;
}

const CSSdata: CSSPage[] = [
  {
    index: 1,
    title: "Center a div",
    language: "CSS",
    snippet: `/* Grid */
    .container{
      display: grid;
      place-items: center;
    }

/* Flexbox */
    .container{
      display: flex;
      align-items: center;
      justify-content: center;
    }`,
  },

  {
    index: 2,
    title: "Targeting all children except for the last child",
    language: "CSS",
    snippet: `li:not(:last-child) {
      /* STYLES */
  }`,
  },

  {
    index: 3,
    title: "Write cleaner CSS with the :is selector",
    language: "CSS",
    snippet: `/* The following code: */
  header a:hover,
  nav a:hover,
  footer a:hover {
      text-decoration: underline;
  }   

/* could instead be written as: */
  :is(header, nav, footer) a:hover {
      text-decoration: underline;
  }
  `,
  },
];

export default CSSdata;
