import {FC} from "react";
import Link from "next/link";
import {BookImage} from "@/components";
import {FiExternalLink} from "react-icons/fi";

interface IBookProps extends Pick<IBook, "title" | "image" | "author" | "price" | "ISBN"> {
    isPremium?: boolean
}

const Book: FC<IBookProps> = ({ISBN, title, image, author, price, isPremium = false}) => {
    return (
        <article className="flex flex-col items-center space-y-2">
            <div className="relative h-72 w-full group/image">
                <BookImage title={title} image={image} fill={true} className="group-hover/image:blur-sm"/>
                <Link href={`/books/${ISBN}`}
                      className="hidden w-fit absolute z-50 left-0 right-0 mx-auto px-4 py-2 rounded-md text-inherit group-hover/image:bottom-3 group-hover/image:flex group-hover/image:bg-white/50 group-hover/image:backdrop-blur-3xl cursor-pointer">
                    <FiExternalLink className="w-6 h-6"/>
                </Link>
            </div>
            <div className="flex flex-col items-center relative text-center">
                <small className="opacity-80">{author}</small>
                <b className="text-lg">{title}</b>
                <small className="text-red-600">${price.value}</small>
            </div>
        </article>
    );
};

export default Book;
