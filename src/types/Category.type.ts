
export interface ICategory {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
}

export interface ICategoryResponse {
    categories: ICategory[];
    total: number;
    page: number;
    lastPage: number;
}