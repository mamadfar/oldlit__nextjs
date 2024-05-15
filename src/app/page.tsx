import {Book} from '@/components'
import {GetBooksService} from '@/services/Book.service'
import {ImBookmark} from 'react-icons/im'

export const revalidate = 1;

const Home = async () => {
    const {data} = await GetBooksService()

    return (
        <section className="px-4">
            <div className='relative mb-16'>
                <h1 className='mb-5 mt-2 border-b pb-2 text-center text-4xl font-bold tracking-widest sm:text-5xl'>
                    <span className='text-red-600'>Trea</span>sures
                </h1>
                <div className='mx-auto grid grid-cols-1 justify-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                    {data.books.filter(book => book.isPremium && book.isActive).map((book) => (
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
                <div className='absolute right-0 top-0'>
                    <ImBookmark className='h-12 w-12 text-red-600 sm:h-16 sm:w-16'/>
                </div>
            </div>
            <div className=''>
                <h2 className='my-5 border-b pb-2 text-center text-3xl font-bold tracking-widest sm:text-4xl'>
                    <span className='text-red-600'>Book</span> Shelf
                </h2>
                <div
                    className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
                    {data.books.filter(book => !book.isPremium && book.isActive).map((book) => (
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
            </div>
        </section>
    )
}

export default Home
