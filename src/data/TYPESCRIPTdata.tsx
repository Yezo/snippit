interface TYPESCRIPTPage {
  index: number;
  title: string;
  language: string;
  snippet: string;
  description?: string;
}

const TYPESCRIPTdata: TYPESCRIPTPage[] = [
  {
    index: 1,
    title: "Basic Types",
    language: "Javascript",
    description: "The most common types you'll see and use.",
    snippet: `type Props = {
  sentence: string;
  count: number;
  status: boolean;
  names: string[]; 
  obj: { 
    id: number;
    title: string;
    completed: boolean;
  }
  //onClick
  onClick: () => void;

  //onClick with an parameter(s)
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;

  //setState 
  setState: React.Dispatch<React.SetStateAction<number>>;
}`,
  },
  {
    index: 2,
    title: "Interface vs. Types",
    language: "Javascript",
    description:
      "If you have to ask the difference, you probably don't need to know.",
    snippet: `interface Props {
      name: "Kevin";
      eyes: 2;
      brain: null;
    }
    
type Props = {
      name: "Kevin";
      eyes: 2;
      brain: null;
    }`,
  },
  {
    index: 3,
    title: "Interface involving an array of objects",
    language: "Javascript",
    snippet: `//An interface for the nested array
interface restaurant {
  restaurant_id: number;
  restaurant_rank: number;
}

//An interface for the original array of objects
interface gordonramsey {
  id: number;
  restaurants: Array<IRestaurant>;
}
    
//Don't forget to type it 
const gordonramsey: gordanramsey = {
  id: 5,
  restaurants: [
      {
          restaurant_id: 1,
          restaurant_rank: 1
      },
      {
          restaurant_id: 2,
          restaurant_rank: 2
      }
  ],
};
  
`,
  },
];

export default TYPESCRIPTdata;
