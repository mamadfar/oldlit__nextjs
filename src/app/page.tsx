import {getBooksService} from "@/services/books.service";
import {Book, BookImage} from "@/components";

const Home = async () => {

    const {data} = await getBooksService();
    const books = data.results;

    return (
        <section className="flex gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {books.map(({id, name, author, imageUrl, price}) => (
                    <Book key={id} name={name} author={author} imageUrl={imageUrl} price={price}/>
                ))}
            </div>
        </section>
    )
}

export default Home;