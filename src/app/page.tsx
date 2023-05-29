import {getBooksService} from "@/services/books.service";
import {Book, BookImage} from "@/components";

const Home = async () => {

    const {data: books} = await getBooksService();
    // const books = data.results;

    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mx-auto">
                {books.map(({ISBN, title, author, image, price}) => (
                    <Book key={ISBN} ISBN={ISBN} title={title} author={author} image={image} price={price}/>
                ))}
            </div>
        </section>
    )
}

export default Home;