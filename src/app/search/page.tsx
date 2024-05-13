'use client'

import {ChangeEvent, useState} from 'react'
import {useQuery} from '@tanstack/react-query'
import {GetBooksService} from '@/services/Book.service'
import {Book} from '@/components'
import {IBook} from "@/types/Book.type";
import Loading from "@/app/loading";
import {Input} from "antd";

const Search = () => {
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState<IBook[]>([])

    const {data, isSuccess, isPending} = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const {data} = await GetBooksService()
            setBooks(data.books)
            return data
        },
    })
    const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        if (isSuccess) {
            const filteredBooks = data.books.filter(book =>
                book.name.toLowerCase().includes(e.target.value.toLowerCase()),
            )
            setBooks(filteredBooks)
        }
    }

    if (isPending) return <Loading/>

    return (
        <section>
            <div className='mb-10 mt-5 text-center'>
                <Input
                    autoFocus
                    type='search'
                    placeholder='Search...'
                    value={search}
                    onChange={handleSearch}
                    className='w-1/2 rounded-sm border-2 border-black focus:border-red-600 py-2 pl-2'
                />
            </div>
            <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
                {books.map((book) => (
                    <Book
                        key={book.id}
                        id={book.id}
                        name={book.name}
                        images={book.images}
                        description={book.description}
                        price={book.price}
                        user={book.user}
                        isPremium={book.isPremium}
                    />
                ))}
            </div>
        </section>
    )
}

export default Search
