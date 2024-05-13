import { Book } from '@/components'
import { GetBooksService } from '@/services/Book.service'

const Books = async () => {
  const { data } = await GetBooksService()

  return (
    <section>
      <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {data.books.map(({name, price, user, isPremium,images, id, description}) => (
          <Book key={id} id={id} name={name} price={price} user={user} isPremium={isPremium} images={images} description={description} />
        ))}
      </div>
    </section>
  )
}

export default Books
