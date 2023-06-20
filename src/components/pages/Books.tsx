"use Client";

import {FC} from 'react';
import {Book} from "@/components";
import {Carousel} from "antd";

const Books: FC<{ books: ReadonlyArray<IBook> }> = ({books}) => {
    return (
        <>
            {books.slice(0, 5).map(({ISBN, title, author, image, price}) => (
                <Book key={ISBN} ISBN={ISBN} title={title} author={author} image={image} price={price}
                      isPremium={true}/>
            ))}
        </>
    );
};

export default Books;
