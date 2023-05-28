"use client";

import {FC, useState} from 'react';
import Image from "next/image";

interface IBookImageProps extends Pick<IBook, "name" | "imageUrl"> {
    fill?: boolean;
}

const BookImage:FC<IBookImageProps> = ({name, imageUrl, fill}) => {

    const [loading, setLoading] = useState(true);

    return (
        <>
            {fill ? (
                <Image
                    src={imageUrl} alt={name} fill={fill}
                    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
                    onLoadingComplete={() => setLoading(false)}
                />
            ) : (
                <Image
                    src={imageUrl} alt={name} width={400} height={1000}
                    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
                    onLoadingComplete={() => setLoading(false)}
                />
            )}
        </>
    );
};

export default BookImage;
