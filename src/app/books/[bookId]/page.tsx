import { getBookService } from '@/services/books.service'
import { BookImage } from '@/components'

const Book = async ({ params }: { params: { bookId: number } }) => {
  const {
    data: { book },
  } = await getBookService(params.bookId)

  return (
    <div className='mx-auto mt-48 flex max-w-5xl flex-col items-center gap-8 px-4 pb-10 md:flex-row'>
      <BookImage title={book.title} image={book.image} />
      <div className='divide-y'>
        <div className='space-y-2 pb-8'>
          <h1 className='text-2xl font-bold md:text-4xl'>{book.title}</h1>
          <h2 className='text-xl font-bold text-red-600/70 md:text-3xl'>
            ${book.price.value}
          </h2>
        </div>
        <div className='pt-8'>
          <p className='text-xs md:text-sm'>{book.summary}</p>
        </div>
      </div>
    </div>
  )
}

export default Book
