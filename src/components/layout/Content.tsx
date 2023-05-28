import {FC, ReactNode} from 'react';
import {Container} from "@/components";

interface IContentProps {
    children: ReactNode;
}

const Content:FC<IContentProps> = ({children}) => {
    return (
        <main className="dark:text-white">
            <Container className="py-3">
                {children}
            </Container>
        </main>
    );
};

export default Content;
