'use client'

import { ChangeEvent, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getBooksService } from '@/services/books.service'
import { Book } from '@/components'

const Search = () => {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState<IBook[] | undefined>([])

  const { data } = useQuery({
    queryKey: ['books'],
    queryFn: () => getBooksService(),
  })

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    const filteredBooks = data?.data.filter(book =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase()),
    )
    setBooks(filteredBooks)
  }

  return (
    <section>
      <div className='mb-10 mt-5 text-center'>
        <input
          type='search'
          placeholder='Search...'
          value={search}
          onChange={handleSearch}
          className='w-1/2 rounded-sm border-2 border-black py-1 pl-2'
        />
      </div>
      <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
        {books?.map(({ ISBN, title, author, image, price }) => (
          <Book
            key={ISBN}
            ISBN={ISBN}
            title={title}
            author={author}
            image={image}
            price={price}
          />
        ))}
      </div>
    </section>
  )
}

export default Search
