'use client'

import { FC, useState } from 'react'
import Image from 'next/image'

interface IBookImageProps extends Pick<IBook, 'title' | 'image'> {
  fill?: boolean
  className?: string
}

const BookImage: FC<IBookImageProps> = ({ title, image, fill, className }) => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {fill ? (
        <Image
          src={image}
          alt={title}
          fill={fill}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'} ${className ?? ''}`}
          onLoad={() => setLoading(false)}
        />
      ) : (
        <Image
          src={image}
          alt={title}
          width={200}
          height={400}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'} ${className ?? ''}`}
          onLoad={() => setLoading(false)}
        />
      )}
    </>
  )
}

export default BookImage
