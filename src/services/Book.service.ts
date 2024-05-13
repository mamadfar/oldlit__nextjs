import API from '@/config/API'
import {BooksResponse, ICreateBook, ISingleBook} from "@/types/Book.type";

export const GetBooksService = () => {
  return API.get<BooksResponse>('/books')
}

export const CreateBookService = (payload: ICreateBook) => {
  return API.post('/books', payload)
}

export const CreateBookImageTempService = (payload: FormData) => {
  return API.post('/books/upload', payload)
}

export const GetBookService = (
  bookId: number | string,
  signal?: AbortSignal,
) => {
  return API.get<ISingleBook>(`/books/${bookId}`, { signal })
}
