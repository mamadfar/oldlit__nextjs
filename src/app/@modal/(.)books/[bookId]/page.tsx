'use client'

import {useState} from 'react'
import {useParams, useRouter} from 'next/navigation'
import {getBookService} from '@/services/books.service'
import {BookImage} from '@/components'
import {useQuery} from '@tanstack/react-query'
import Modal from '@/app/@modal/modal'

const BookModal = (props: any) => {
    const [modalOpen, setModalOpen] = useState(true)
    // const [isLoading, setIsLoading] = useState(false);
    // const [book, setBook] = useState<IBook | null>(null);

    const {bookId} = useParams()
    const router = useRouter()

    const handleOnClose = () => {
        setModalOpen(false)
        router.back()
    }

    const getBook = async (
        id: number | string | string[] | any,
        signal?: AbortSignal,
    ): Promise<IBook> => {
        try {
            // setIsLoading(true);
            const {
                data: {book},
            } = await getBookService(id, signal)
            return book
            // setBook(data.book);
            // setIsLoading(false);
        } catch (e: any) {
            // setIsLoading(false);
            return e
        }
    }

    const {data: book, isLoading} = useQuery({
        queryKey: ['book', bookId],
        queryFn: ({queryKey, signal}) => getBook(queryKey[1], signal),
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
        <Modal title={book?.title ?? 'OldLit'}>
            {!isLoading ? (
                <>
                    {book ? (
                        <div className='flex h-96 gap-x-8'>
                            <div className='relative hidden h-full w-52 md:inline'>
                                <BookImage title={book.title} image={book.image}/>
                            </div>
                            <div className='flex flex-1 flex-col'>
                                <div className='flex-1'>
                                    {/*<h4 className="font-semibold">{book.title}</h4>*/}
                                    <p className='text-sm font-medium text-red-600'>
                                        ${book.price.value}
                                    </p>
                                    <p className='line-clamp-5 text-sm'>{book.summary}</p>
                                </div>
                                <div className='space-y-3 text-sm'>
                                    <button
                                        className='button w-full border-transparent bg-red-600 text-white hover:border-red-600 hover:bg-transparent hover:text-black'>
                                        Add to bag
                                    </button>
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
