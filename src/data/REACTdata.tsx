interface REACTPage {
  index: number;
  title: string;
  language: string;
  snippet: string;
  description?: string;
}

const REACTdata: REACTPage[] = [
  {
    index: 1,
    title: "Component Lifecycle",
    language: "Javascript",
    description:
      "React has a component lifecycle that can be simplified down to three phases: Mounting, Updating, and Unmounting.",
    snippet: `componentDidMount() => componentDidUpdate() => componentWillUnmount()`,
  },
  {
    index: 2,
    title: "useState & useEffect",
    language: "Javascript",
    snippet: `import { useState, useEffect } from 'react';

const [count, setCount] = useState(0);

useEffect(() => {
  // LOGIC_HERE
}, [DEPENDENCY_VALUE_IF_NEEDED]);`,
  },
  {
    index: 3,
    title: "Cleanup on fetch with useEffect",
    language: "Javascript",
    description:
      "We want to clean up our fetches in useEffect to prevent unnecessary fetching and the overwriting of previously fetched data. We can access the AbortController( ) to tell us when a request has been aborted. Adding a try and catch block is useful for catching any errors that may show up during a fetch request. ",
    snippet: `useEffect(() => {
  const controller = new AbortController();
  const fetchAPI = async () => {
    setError(false);
    setIsLoading(true);
    try {
      const data = await fetch(API_URL);
      const resp = await resBlueCrystal.json();
      setData(resp);
    } catch (error) {
      controller.signal.aborted && console.log("Aborted the fetch.");
    } 
  };
  fetchAPI();
  return () => {
    controller.abort();
  };
}, []);`,
  },
  {
    index: 4,
    title: "?",
    language: "Javascript",
    snippet: ``,
  },
];

export default REACTdata;
