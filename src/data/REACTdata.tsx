interface REACTPage {
  index: number;
  title: string;
  language: string;
  snippet: string;
}

const REACTdata: REACTPage[] = [
  {
    index: 1,
    title: "Component Lifecycle",
    language: "Javascript",
    snippet: `componentDidMount() => componentDidUpdate() => componentWillUnmount()`,
  },
  {
    index: 2,
    title: "Hooks: useState",
    language: "Javascript",
    snippet: `import { useState } from 'react';

const [count, setCount] = useState(0);`,
  },
  {
    index: 3,
    title: "Hooks: useEffect",
    language: "Javascript",
    snippet: `import { useEffect } from 'react';

    useEffect(() => {
      // LOGIC_HERE
    }, [DEPENDENCY_VALUE_IF_NEEDED]);`,
  },
  {
    index: 4,
    title: "Conditionally render a component",
    language: "Javascript",
    snippet: `{renderComponent ? <FirstComponent /> : <SecondComponent />}`,
  },
  {
    index: 4,
    title: "Cleanup on fetch with useEffect",
    language: "Javascript",
    snippet: `  useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
  
      fetch(API_URL, { signal })
      .then(async (resp) => {
        if(resp.ok) {
          const state = await resp.json();
          setState(state);
        } else {
          console.log("Your items could not be fetched");
        }
      })
      .catch((err) => console.log(err));
      return () => {
        controller.abort();
      };
    }, []);`,
  },
  {
    index: 4,
    title: "Conditionally render a component",
    language: "Javascript",
    snippet: `{renderComponent ? <FirstComponent /> : <SecondComponent />}`,
  },
];

export default REACTdata;
