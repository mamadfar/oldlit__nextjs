
import {getBookService} from "@/services/books.service";
import {BookImage} from "@/components";

const Book = async ({ params }: { params: { bookId: number } }) => {

    const {data: {book}} = await getBookService(params.bookId);

    return (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
            <BookImage title={book.title} image={book.image}/>
            <div className="divide-y">
                <div className="space-y-2 pb-8">
                    <h1 className="text-2xl md:text-4xl font-bold">{book.title}</h1>
                    <h2 className="text-red-600/70 font-bold text-xl md:text-3xl">${book.price.value}</h2>
                </div>
                <div className="pt-8">
                    <p className="text-xs md:text-sm">{book.summary}</p>
                </div>
            </div>
        </div>
    );
};

export default Book;
