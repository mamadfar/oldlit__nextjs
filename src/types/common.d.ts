interface IBookResponse<T> {
  book: T
}

type IPreferColorScheme = 'light' | 'dark'


export interface IResponseWithPagination {
  total: number;
  page: number;
  lastPage: number;
}