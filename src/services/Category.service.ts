import API from "@/config/API";
import {ICategoryResponse} from "@/types/Category.type";

export const CategoriesService = () => {
    return API.get<ICategoryResponse>('/categories')
}