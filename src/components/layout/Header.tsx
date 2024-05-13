import Link from 'next/link'
import {AiOutlineUser} from 'react-icons/ai'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import {ActiveLink, Breadcrumb, Container, Logo} from '@/components'
import LoginChecker from "@/components/utils/LoginChecker";

const Header = () => {
    return (
        <header>
            <div
                className='border-b-black bg-black text-[11px] tracking-wider text-white dark:border-b-white dark:bg-white dark:text-black'>
                <Container
                    className='flex flex-col items-center space-y-2 px-2 py-2 sm:flex-row sm:justify-between sm:space-y-0 sm:px-0'>
                    <div className='flex-1 space-x-7'>
                        <a
                            href='mailto:m.sabah.farhadi@gmail.com'
                            className='hover:underline'
                        >
                            m.sabah.farhadi@gmail.com
                        </a>
                        <a href='tel:+36205635581' className='hover:underline'>
                            (+36) 20-5635-581
                        </a>
                    </div>
                    <div className='flex space-x-7'>
                        <LoginChecker/>
                        <div className='flex items-center space-x-5'>
                            <a href='#'>
                                <FaFacebookF className='h-3 w-3 hover:text-red-600'/>
                            </a>
                            <a href='#'>
                                <FaInstagram className='h-3 w-3 hover:text-red-600'/>
                            </a>
                            <a href='#'>
                                <FaTwitter className='h-3 w-3 hover:text-red-600'/>
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <nav className='flex items-center dark:text-white'>
                    <Logo/>
                    <ul className='flex h-20'>
                        <li className='flex h-full'>
                            <ActiveLink
                                href='/'
                                linkClass='flex items-end h-full px-4 pb-3'
                                activeClass='bg-red-500 text-white'
                            >
                                Home
                            </ActiveLink>
                        </li>
                        <li className='flex h-full'>
                            <ActiveLink
                                href='/books'
                                linkClass='flex items-end h-full px-4 pb-3'
                                activeClass='bg-red-600 text-white'
                            >
                                Books
                            </ActiveLink>
                        </li>
                    </ul>
                    <div className='ml-auto'>
                        <Link href='/search'>
                            <BsSearch className='h-5 w-5 cursor-pointer'/>
                        </Link>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header
