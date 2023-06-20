import {Book} from "@/components";
import {getBooksService} from "@/services/books.service";
import {ImBookmark} from "react-icons/im";

const Home = async () => {

    const {data: books} = await getBooksService();

    return (
        <section>
            <div className="mb-16 relative">
                <h1 className="text-center text-4xl sm:text-5xl font-bold tracking-widest mt-2 mb-5 border-b pb-2"><span className="text-red-600">Trea</span>sures</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-auto">
                    {books.slice(0, 5).map(({ISBN, title, author, image, price}) => (
                        <Book key={ISBN} ISBN={ISBN} title={title} author={author} image={image} price={price}
                              isPremium={true}/>
                    ))}
                </div>
                <div className="absolute top-0 right-0">
                    <ImBookmark className="text-red-600 w-12 h-12 sm:w-16 sm:h-16"/>
                </div>
            </div>
            <div className="">
                <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-widest my-5 border-b pb-2"><span className="text-red-600">Book</span> Shelf</h2>
                <div
                    className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 mx-auto">
                    {books.slice(6).map(({ISBN, title, author, image, price}) => (
                        <Book key={ISBN} ISBN={ISBN} title={title} author={author} image={image} price={price}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home;