// interface IBook {
//     id: number | string;
//     name: string;
//     author: string;
//     summary: string;
//     description: string;
//     imageUrl: string;
//     stock: number;
//     rate: number;
//     price: number;
//     categories: string[];
// }
interface IBook {
  ISBN: number
  title: string
  author: string
  summary: string
  image: string
  price: {
    currency: string
    value: number
    displayValue: string
  }
}
