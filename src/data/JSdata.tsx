interface JSPage {
  index: number;
  title: string;
  language: string;
  snippet: string;
  description?: string;
}

const JSdata: JSPage[] = [
  {
    index: 1,
    title: "Data types",
    language: "Javascript",
    description: "There are a total of 7 primitive types in Javascript.",
    snippet: `const string = "I am a string"; // zero or more characters
const number = 2023; // numeric values
const bigInt = 123456789012345601234567890n; // any integers beyond 9007199254740991
const boolean = true; // returns true or false
const nullItem = null; // for unknown values
const undefinedItem = undefined; // for unassigned values
const symbol = Symbol(); // built-in objects`,
  },
  {
    index: 2,
    title: "Arrays & Objects",
    language: "Javascript",
    description:
      "Arrays are data structures that can hold multiple values in a single variable denoted with [ ]. Objects are data structures that can hold key and value pairs and are denoted with { }.",
    snippet: `const arr = ["This is an array", 2023, undefined, false, "Hi"]

const obj = {
    head: "big",
    eyes: 2,
    brain: null
}`,
  },
  {
    index: 3,
    title: "Sorting an array of numbers",
    language: "Javascript",
    description: `We can use the .sort() method to sort strings alphabetically but we can also use it to sort arrays of numbers. For people who find it difficult to remember which way is ascending vs. descending, try remembering it as A to Z and vice-versa.`,
    snippet: `const arr = [2,8,4,3,5];
const ascending = arr.sort(a, z) => a - z) // returns [2,3,4,5,8]
const descending = arr.sort(a, z) => z - a)// returns [8,5,4,3,2]`,
  },
  {
    index: 4,
    title: "Remove all duplicates in an array",
    language: "Javascript",
    description: `Using Set( ) is the simplest and fastest method for removing duplicates in an array.`,
    snippet: `const arr = [5,10,10,25,99];
const removedDuplicates = [...new Set(arr)] // returns [5,10,25,99]`,
  },
  {
    index: 5,
    title: "Shorter if statements with conditionals",
    language: "Javascript",
    description: `"If statements" can get out of hand quickly as code complexity grows. They can instead be shortened using the && conditional operator or with ternary operators.`,
    snippet: `num > 10 && console.log("Number is above 10!")
num === 10 ? console.log("Number is 10!") : console.log("Number is not 10!")`,
  },
  {
    index: 6,
    title: "Formatting numbers as currency ",
    language: "Javascript",
    description: `"Use Intl.NumberFormat to format your numbers as currency. You can also choose which country or how many decimals you want to show.`,
    snippet: `const formatNums = new Intl.NumberFormat("en-US", {
      currency: "USD",
      minimumFractionDigits: 2,
    })
    
const num = formatNums.format(5000)
//"$5,000"`,
  },

  {
    index: 7,
    title: "Combine two arrays together",
    language: "Javascript",
    description: `Use the "..." spread operator to merge two arrays.`,
    snippet: `const arr = [1,2,3]
const arrTwo = [4,5,6]
const combined = [...arr, ...arrTwo]
//[1,2,3,4,5,6]`,
  },
];

export default JSdata;
