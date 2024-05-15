'use client'

import {FC, useState} from 'react'
import Image from 'next/image'

interface IBookImageProps {
    name: string;
    image: string;
    fill?: boolean
    className?: string
  isPremium?: boolean
}

const BookImage: FC<IBookImageProps> = ({name, image, fill, className, isPremium}) => {
    const [loading, setLoading] = useState(true)

    return (
        <>
            {fill ? (
                <>
                    {/*<img*/}
                    {/*    src={image}*/}
                    {/*    alt={name}*/}
                    {/*    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'} ${className ?? ''}`}*/}
                    {/*    onLoad={() => setLoading(false)}*/}
                    {/*/>*/}
                    <Image
                        src={image}
                        alt={name}
                        fill={fill}
                        className={`object-[inherit] duration-700 ease-in-out group-hover:opacity-75 ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'} ${className ?? ''}`}
                        onLoad={() => setLoading(false)}
                    />
                    {isPremium && <span
                        className="badge absolute top-2.5 -left-3.5 -rotate-45 text-xs inline-flex items-center rounded-md bg-pink-50 px-2 py-1 font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Premium</span>}
                </>
            ) : (
                <>
                    {/*<img*/}
                    {/*    src={image}*/}
                    {/*    alt={name}*/}
                    {/*    width={200}*/}
                    {/*    height={400}*/}
                    {/*    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'} ${className ?? ''}`}*/}
                    {/*    onLoad={() => setLoading(false)}*/}
                    {/*/>*/}
                    <Image
                        src={image}
                        alt={name}
                        width={200}
                        height={400}
                        className={`object-[inherit] duration-700 ease-in-out group-hover:opacity-75 ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'} ${className ?? ''}`}
                        onLoad={() => setLoading(false)}
                    />
                    {isPremium && <span
                        className="badge absolute top-2.5 -left-3.5 -rotate-45 text-xs inline-flex items-center rounded-md bg-pink-50 px-2 py-1 font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Premium</span>}
                </>
            )}
        </>
    )
}

export default BookImage
