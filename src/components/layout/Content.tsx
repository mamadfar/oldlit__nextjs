import {FC, ReactNode} from 'react';
import {Container} from "@/components";

interface IContentProps {
    children: ReactNode;
}

const Content:FC<IContentProps> = ({children}) => {
    return (
        <main className="dark:text-white flex-1 flex">
            <Container className="py-3 flex-1">
                {children}
            </Container>
        </main>
    );
};

export default Content;
