interface JSPage {
  index: number;
  title: string;
  language: string;
  snippet: string;
}

const JSdata: JSPage[] = [
  {
    index: 1,
    title: "Data types",
    language: "Javascript",
    snippet: `//There are 7 primitive and 1 non-primitive data types 
const string = "I am a string"; // zero or more characters
const number = 2022; // any integers
const bigInt = 123456789012345601234567890n; // any integers beyond 9007199254740991
const boolean = true; // returns true or false
const test1 = null; // for unknown values
const test2 = undefined; // for unassigned values
const sym1 = Symbol(); // built-in objects
const object = { // non-primitive data type containing key and value pairs
  key: value,
  name: "Joe",
  arms: 2,
  married: false;
  income: null;
};`,
  },
  {
    index: 2,
    title: "Array methods",
    language: "Javascript",
    snippet: `const arr = [1,2,3,4,5];

// The "map" method returns an array with each element transformed
const map = arr.map(item => item + 1); 
// returns [2,3,4,5,6]

// The "filter" method returns an array with each element that returned true
const filter = arr.filter(item => item === 2 || item === 5); // returns [2, 5]


const sort = arr.sort((item1, item2) => item1 - item2)); 

    
    `,
  },
];

export default JSdata;
