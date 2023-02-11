interface TYPESCRIPTPage {
  index: number;
  title: string;
  language: string;
  snippet: string;
}

const TYPESCRIPTdata: TYPESCRIPTPage[] = [
  {
    index: 1,
    title: "Interface",
    language: "Javascript",
    snippet: `interface Props {
      index: number;
      name: string;
      handsome: true;
    }`,
  },
  {
    index: 2,
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
