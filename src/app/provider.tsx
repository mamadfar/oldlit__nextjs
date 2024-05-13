'use client'

import { FC, ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ConfigProvider} from "antd";
// import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#dc2626',
              colorLink: '#dc2626',
            }
          }}
      >
      {children}
      {/*<ReactQueryDevtools/>*/}
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default Providers
