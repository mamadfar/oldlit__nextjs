'use client'

import {useParams} from 'next/navigation'
import {GetBookService} from '@/services/Book.service'
import {BookImage} from '@/components'
import {useQuery} from '@tanstack/react-query'
import Modal from '@/app/@modal/modal'
import Link from "next/link";

const BookModal = (props: any) => {

    const {bookId} = useParams<{ bookId: string }>()

    const {data: book, isLoading} = useQuery({
        queryKey: ['book', bookId],
        queryFn: async ({queryKey, signal}) => {
            const {data} = await GetBookService(bookId, signal)
            return data
        },
    })

    return (
        <Modal title={book?.name ?? 'OldLit'} width={700}>
            {!isLoading ? (
                <>
                    {book ? (
                        <div className='flex h-96 gap-x-8 relative'>
                            <div className='hidden h-full w-60 md:inline'>
                                <BookImage name={book.name} image={book.images[0]} isPremium={book.isPremium}
                                           className="h-full w-full rounded-md"/>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <div className='flex-1 flex flex-col'>
                                    <p className='text-sm font-medium text-red-600'>
                                        {book.price} HUF
                                    </p>
                                    <p className='line-clamp-5 text-sm'>{book.description}</p>
                                    <div className="mt-auto mb-4">
                                        <div className="flex flex-col gap-2">
                                            <p className="border-b w-fit">Contact</p>
                                            <small className="text-xs"><b>Address:</b> {book.contact.fromAddress}
                                            </small>
                                            <small className="text-xs"><b>Phone Number:</b> {book.contact.phoneNumber}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-3 text-sm'>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className='button w-full border-red-600 bg-transparent hover:border-transparent hover:bg-red-600 hover:text-white'
                                    >
                                        View full details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h2>There is no such data.</h2>
                    )}
                </>
            ) : (
                <div className='mx-auto h-8 w-8 animate-spin rounded-full border-2 border-dotted border-red-600'/>
            )}
        </Modal>
    )
}

export default BookModal
