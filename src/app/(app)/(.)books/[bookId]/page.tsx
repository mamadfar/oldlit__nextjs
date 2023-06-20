"use client";

import {useEffect, useState} from "react";
import {Modal} from "antd";
import {useParams, useRouter} from "next/navigation";
import {getBookService} from "@/services/books.service";
import {BookImage} from "@/components";
import {useQuery} from "@tanstack/react-query";

const BookModal = () => {

    const [modalOpen, setModalOpen] = useState(true);
    // const [isLoading, setIsLoading] = useState(false);
    // const [book, setBook] = useState<IBook | null>(null);

    const {bookId} = useParams();
    const router = useRouter();

    const handleOnClose = () => {
        setModalOpen(false);
        router.back();
    }

    const getBook = async (id: number | string, signal?: AbortSignal): Promise<IBook> => {
        try {
            // setIsLoading(true);
            const {data: {book}} = await getBookService(id, signal);
            return book;
            // setBook(data.book);
            // setIsLoading(false);
        } catch (e: any) {
            // setIsLoading(false);
            return e;
        }
    }

    const {data: book, isLoading} = useQuery({
        queryKey: ["book", bookId],
        queryFn: ({queryKey, signal}) => getBook(queryKey[1], signal)
    });

    // useEffect(() => {
    //     const controller = new AbortController();
    //     void getBook(controller.signal);
    //     return () => controller.abort("User canceled the request.");
    // }, [])

    return (
        <Modal
            title={book?.title ?? "OldLit"}
            centered
            open={modalOpen}
            onCancel={handleOnClose}
            destroyOnClose
            footer={false}
            width={"40%"}
        >
            {!isLoading ? (
                <>
                    {book ? (
                        <div className="flex gap-x-8 h-96">
                            <div className="relative w-52 h-full hidden md:inline">
                                <BookImage title={book.title} image={book.image}/>
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div className="flex-1">
                                    {/*<h4 className="font-semibold">{book.title}</h4>*/}
                                    <p className="font-medium text-sm text-red-600">${book.price.value}</p>
                                    <p className="line-clamp-5 text-sm">{book.summary}</p>
                                </div>
                                <div className="space-y-3 text-sm">
                                    <button
                                        className="button w-full bg-red-600 text-white border-transparent hover:border-red-600 hover:bg-transparent hover:text-black">Add to bag</button>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="button w-full bg-transparent border-red-600 hover:bg-red-600 hover:text-white hover:border-transparent">View full details</button>
                                </div>
                            </div>
                        </div>
                    ) : <h2>There is no such data.</h2>}
                </>
            ) : (
                <div
                    className="h-8 w-8 rounded-full border-2 border-dotted border-red-600 animate-spin mx-auto"/>
            )}
        </Modal>
    );
};

export default BookModal;
