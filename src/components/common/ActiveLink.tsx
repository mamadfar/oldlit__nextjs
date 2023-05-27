"use client";

import Link, {LinkProps} from "next/link";
import {FC, ReactNode} from 'react';
import {usePathname} from "next/navigation";

interface IActiveLinkProps extends LinkProps {
    children: ReactNode;
    activeClass: string;
    linkClass?: string;
}

const ActiveLink:FC<IActiveLinkProps> = ({children, activeClass, linkClass, href, ...props}) => {

    const pathname = usePathname();

    return (
        <Link href={href} className={`${linkClass ?? ""} ${href === pathname ? activeClass : ""}`} {...props}>
            {children}
        </Link>
    );
};

export default ActiveLink;
