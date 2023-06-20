import {ReactNode} from "react";
import './globals.scss'
import {Inter} from 'next/font/google'
import {Content, DarkMode, Footer, Header} from "@/components";
import Provider from "@/app/(app)/provider";
import ProgressBarProvider from "@/components/layout/ProgressBarProvider";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'OldLit',
    description: 'Old literature Book Store',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col dark:bg-black`}>
        <Provider>
            <ProgressBarProvider>
                <Header/>
                <Content>{children}</Content>
                <DarkMode/>
                <Footer/>
            </ProgressBarProvider>
        </Provider>
        </body>
        </html>
    )
}
