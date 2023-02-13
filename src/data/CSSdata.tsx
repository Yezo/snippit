interface CSSPage {
  index: number;
  title: string;
  language: string;
  snippet: string;
  description?: string;
}

const CSSdata: CSSPage[] = [
  {
    index: 1,
    title: "Centering a div",
    language: "CSS",
    description: "Yup.",
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
    description:
      "This is useful for navigation lists or dropdown menu items where you don't want the last child to also be styled. It's usually paired with divides, borders, or padding.",
    snippet: `  li:not(:last-child) {
    /* styling here */
}`,
  },

  {
    index: 3,
    title: "Write cleaner CSS with the :is() function",
    language: "CSS",
    description:
      "The :is() function is used to simplify multiple CSS selections. Use it whenever you wish to target more than one elements with the same styles.",
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

  {
    index: 4,
    title: "Prevent the scrollbar from pushing content to the left",
    language: "CSS",
    description: `The first option works but instead creates a permanent scrollbar even on pages without scrollable content. Alternatively, the second option is my go-to solution and supposedly only works on centered content. 
      `,
    snippet: `/* OPTION 1 */
  html {
    overflow-y: scroll;
}

/* OPTION 2 */
  html {
    width:100vw;
    overflow-x:hidden;
}`,
  },
];

export default CSSdata;
