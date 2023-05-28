import {BookImage} from "@/components";
import {FC} from "react";

interface IBookProps extends Pick<IBook, "name" | "imageUrl" | "author" | "price"> {
    
}

const Book:FC<IBookProps> = ({name, imageUrl,author, price}) => {
    return (
        <article className="flex flex-col items-center space-y-2 tracking-wider">
            <BookImage name={name} imageUrl={imageUrl}/>
            <small className="opacity-80">{author}</small>
            <b className="text-lg">{name}</b>
            <small className="text-red-600">${price}</small>
        </article>
    );
};

export default Book;
