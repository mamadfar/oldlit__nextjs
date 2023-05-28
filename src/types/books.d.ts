interface IBook {
    id: number | string;
    name: string;
    author: string;
    summary: string;
    description: string;
    imageUrl: string;
    stock: number;
    rate: number;
    price: number;
    categories: string[];
}