import {FC} from 'react'
import Link from 'next/link'
import {BookImage} from '@/components'
import {FiExternalLink} from 'react-icons/fi'
import {IBook} from "@/types/Book.type";

const Book: FC<Pick<IBook, 'id' | 'name' | 'description' | 'price' | 'user' | 'isPremium' | 'images'>> = ({
                                                                                                             id,
                                                                                                             name,
                                                                                                             description,
                                                                                                             images,
                                                                                                             price,
                                                                                                             user,
                                                                                                             isPremium,
                                                                                                         }) => {
    return (
        <article className='flex flex-col items-center space-y-2 relative max-w-60'>
            <div className='group/image relative h-72 w-full'>
                <BookImage
                    name={name}
                    image={images[0]}
                    fill={true}
                    isPremium={isPremium}
                    className='group-hover/image:blur-sm h-full w-full object-cover rounded-md'
                />
                <Link
                    href={`/books/${id}`}
                    className='absolute left-0 right-0 z-50 mx-auto hidden w-fit cursor-pointer rounded-md px-4 py-2 text-inherit group-hover/image:bottom-3 group-hover/image:flex group-hover/image:bg-white/50 group-hover/image:backdrop-blur-3xl'
                >
                    <FiExternalLink className='h-6 w-6'/>
                </Link>
            </div>
            <div className='relative flex flex-col items-center text-center'>
                <small className='opacity-80'>{(user.firstName ?? '-') + ' ' + (user.lastName ?? '-')}</small>
                <b className='text-lg'>{name}</b>
                <small className='text-red-600'>${price}</small>
            </div>
        </article>
    )
}

export default Book