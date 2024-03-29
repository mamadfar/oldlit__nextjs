import API from '@/config/API'
import { AxiosResponse } from 'axios'

export const getBooksService = () => {
  return API.get<ReadonlyArray<IBook>>('/data/books')
}

export const getBookService = (
  bookId: number | string,
  signal?: AbortSignal,
) => {
  return API.get<IBookResponse<IBook>>(`/books/${bookId}`, { signal })
}
