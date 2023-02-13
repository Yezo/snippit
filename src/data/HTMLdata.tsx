interface HTMLPage {
  index: number;
  title: string;
  language: string;
  snippet: string;
  description?: string;
}

const HTMLdata: HTMLPage[] = [
  {
    index: 1,
    title: "Semantic HTML elements",
    language: "HTML",
    snippet: `<header></header>
<nav></nav>
<main></main>
<article></article>
<section></section>
<aside></aside>
<figure></figure>
<footer></footer>`,
  },
  {
    index: 2,
    title: "Forms: Elements",
    language: "HTML",
    snippet: `<input>
<label>
<select>
<textarea>
<button>
<fieldset>
<legend>
<datalist>
<output>
<option>
<optgroup>
`,
  },
  {
    index: 3,
    title: "Forms: Input types",
    language: "HTML",
    snippet: `<input type="text">
<input type="radio">
<input type="checkbox">
<input type="submit">
<input type="button">`,
  },
  {
    index: 6,
    title: "When to use article vs. section",
    language: "HTML",
    snippet: `<input type="text">
<input type="radio">
<input type="checkbox">
<input type="submit">
<input type="button">`,
  },
];

export default HTMLdata;
