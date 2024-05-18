import {GetBookService} from '@/services/Book.service'
import {BookImage, PremiumSubscription} from '@/components'
import Link from "next/link";

export const revalidate = 1;

const Book = async ({params}: { params: { bookId: number } }) => {
    const {
        data: book,
    } = await GetBookService(params.bookId)

    return (
        <div className="flex justify-center mt-48">
            <div className='flex-1 flex max-w-5xl flex-col items-center gap-8 px-4 pb-10 md:flex-row relative'>
                <BookImage name={book.name} image={book.images[0]} isPremium={book.isPremium}
                           className="h-full w-full max-w-xs rounded-md"/>
                <div className='divide-y'>
                    <div className='space-y-2 pb-4'>
                        <h1 className='text-2xl font-bold md:text-4xl'>{book.name}</h1>
                        <h2 className='text-xl font-bold text-red-600/70 md:text-3xl'>
                            {book.price} HUF
                        </h2>
                        <div className="flex flex-col gap-2">
                            <p className="border-b w-fit">Contact</p>
                            <small className="text-xs"><b>Address:</b> {book.contact.fromAddress}</small>
                            <small className="text-xs"><b>Phone Number:</b> {book.contact.phoneNumber}</small>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <p className='text-xs md:text-sm'>{book.description}</p>
                    </div>
                </div>
            </div>
            {!book.isPremium && <PremiumSubscription/>}
        </div>
    )
}

export default Book
