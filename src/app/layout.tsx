import {ReactNode} from "react";
import './globals.scss'
import {Inter} from 'next/font/google'
import {Content, DarkMode, Footer, Header} from "@/components";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'OldLit',
    description: 'Old literature Book Store',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <Header/>
        <Content>{children}</Content>
        <DarkMode/>
        <Footer/>
        </body>
        </html>
    )
}
