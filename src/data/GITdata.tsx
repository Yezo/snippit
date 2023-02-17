interface GITPage {
  index: number;
  title: string;
  language: string;
  snippet: string;
  description?: string;
}

const GITdata: GITPage[] = [
  {
    index: 1,
    title: "Create a new repository",
    language: "javascript",
    description: "",
    snippet: `//Initialize a new repository in the current directory
    git init
    
//Adds/stages all documents and prepares them for the next git commit
    git add .`,
  },
  {
    index: 2,
    title: "Commit your changes to the repository",
    language: "javascript",
    description: "",
    snippet: `//Commit with a message
    git commit -m "COMMIT_MSG"`,
  },
  {
    index: 2,
    title: "Git checks",
    language: "javascript",
    description: "",
    snippet: `//Check which tracked files have been changed
    git diff

//Check the history of changes
    git log`,
  },
  {
    index: 3,
    title: "Branches & Merges",
    language: "javascript",
    description: "",
    snippet: `//Check the list of available branches
    git branch

//Create a new branch
    git branch BRANCH_NAME

//Change to a different branch
    git checkout BRANCH_NAME

//Merge branch
    git merge BRANCH_NAME`,
  },
];

export default GITdata;
