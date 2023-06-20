'use client'

import {FC, ReactNode, useState} from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const Providers:FC<{children: ReactNode}> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/*<ReactQueryDevtools/>*/}
        </QueryClientProvider>
    )
};

export default Providers;