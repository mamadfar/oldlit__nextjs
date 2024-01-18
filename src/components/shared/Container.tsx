import { FC, HTMLAttributes, ReactNode } from 'react'

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Container: FC<IContainerProps> = ({ children, className, ...props }) => {
  return (
    <section
      className={`mx-auto h-auto w-full sm:w-[98%] lg:w-[95%] ${className ?? ''}`}
      {...props}
    >
      {children}
    </section>
  )
}

export default Container
