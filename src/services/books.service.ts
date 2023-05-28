import API from "@/config/API";

export const getBooksService = () => {
        return API.get<IResponse<ReadonlyArray<IBook>>>("http://localhost:3000/api/books");
}