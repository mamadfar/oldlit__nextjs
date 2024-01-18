import { Book } from '@/components'
import { getBooksService } from '@/services/books.service'

const Books = async () => {
  const { data: books } = await getBooksService()

  return (
    <section>
      <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {books.map(({ ISBN, title, author, image, price }) => (
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

export default Books
