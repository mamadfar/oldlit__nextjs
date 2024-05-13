'use client'

import {useState} from 'react'
import {useParams, useRouter} from 'next/navigation'
import {GetBookService} from '@/services/Book.service'
import {BookImage} from '@/components'
import {useQuery} from '@tanstack/react-query'
import Modal from '@/app/@modal/modal'
import {IBook} from "@/types/Book.type";

const BookModal = (props: any) => {
    const [modalOpen, setModalOpen] = useState(true)
    // const [isLoading, setIsLoading] = useState(false);
    // const [book, setBook] = useState<IBook | null>(null);

    const { bookId } = useParams<{ bookId: string }>()
    const router = useRouter()

    const {data: book, isLoading} = useQuery({
        queryKey: ['book', bookId],
        queryFn: async ({queryKey, signal}) => {
            const {data} = await GetBookService(bookId, signal)
            return data
        },
    })

    // useEffect(() => {
    //     const controller = new AbortController();
    //     void getBook(controller.signal);
    //     return () => controller.abort("User canceled the request.");
    // }, [])

    // const {scrollPosition} = usePosition()
    // useEffect(() => {
    //     console.log(props)
    //     window.scrollTo(0, scrollPosition)
    // }, [scrollPosition])

    return (
        <Modal title={book?.name ?? 'OldLit'}>
            {!isLoading ? (
                <>
                    {book ? (
                        <div className='flex h-96 gap-x-8'>
                            <div className='relative hidden h-full w-52 md:inline'>
                                <BookImage name={book.name} image={book.images[0]} className="h-full w-full object-cover rounded-md"/>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <div className='flex-1'>
                                    <p className='text-sm font-medium text-red-600'>
                                        ${book.price}
                                    </p>
                                    <p className='line-clamp-5 text-sm'>{book.description}</p>
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
