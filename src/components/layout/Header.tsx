import Link from "next/link";
import {AiOutlineUser} from "react-icons/ai";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import {BsSearch} from "react-icons/bs";
import {ActiveLink, Container} from "@/components";

const Header = () => {
    return (
        <header>
            <div className="bg-white dark:bg-black dark:text-white border-b dark:border-b-black text-[11px] tracking-wider">
                <Container className="flex justify-between py-2 px-2 sm:px-0">
                    <div className="flex-1 space-x-7">
                        <a href="mailto:m.sabah.farhadi@gmail.com"
                           className="hover:underline">m.sabah.farhadi@gmail.com</a>
                        <a href="tel:+36205635581" className="hover:underline">(+36) 20-5635-581</a>
                    </div>
                    <div className="flex space-x-7">
                        <Link href="/login" className="uppercase flex items-center space-x-1">
                            <AiOutlineUser className="w-4 h-4"/>
                            <span className="hover:text-red-600">Login</span>
                        </Link>
                        <div className="flex items-center space-x-5">
                            <a href="#">
                                <FaFacebookF className="w-3 h-3 hover:text-red-600"/>
                            </a>
                            <a href="#">
                                <FaInstagram className="w-3 h-3 hover:text-red-600"/>
                            </a>
                            <a href="#">
                                <FaTwitter className="w-3 h-3 hover:text-red-600"/>
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <nav className="flex items-center">
                    <Link href="/" className="mt-4 mr-9">LOGO</Link>
                    <ul className="flex">
                        <li className="h-fit">
                            <ActiveLink href="/" linkClass="flex h-full px-4 pb-4 pt-8" activeClass="bg-red-500 text-white">Home</ActiveLink>
                        </li>
                        <li className="h-fit">
                            <ActiveLink href="/books" linkClass="flex h-full px-4 pb-4 pt-8" activeClass="bg-red-500 text-white">Books</ActiveLink>
                        </li>
                    </ul>
                    <div className="ml-auto">
                        <BsSearch className="w-5 h-5 cursor-pointer"/>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
