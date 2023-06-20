"use client";

import {ChangeEvent, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getBooksService} from "@/services/books.service";
import {Book} from "@/components";

const Search = () => {

    const [search, setSearch] = useState("");
    const [books, setBooks] = useState<IBook[] | undefined>([]);

    const {data} = useQuery({
        queryKey: ["books"],
        queryFn: () => getBooksService()
    });

    const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        const filteredBooks = data?.data.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setBooks(filteredBooks);
    }

    return (
        <section>
            <div className="text-center mt-5 mb-10">
                <input type="search" placeholder="Search..." value={search} onChange={handleSearch} className="border-2 border-black rounded-sm w-1/2 pl-2 py-1"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 mx-auto">
                {books?.map(({ISBN, title, author, image, price}) => (
                    <Book key={ISBN} ISBN={ISBN} title={title} author={author} image={image} price={price}/>
                ))}
            </div>
        </section>
    );
};

export default Search;
