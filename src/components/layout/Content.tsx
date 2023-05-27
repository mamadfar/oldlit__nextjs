import {FC, ReactNode} from 'react';

interface IContentProps {
    children: ReactNode;
}

const Content:FC<IContentProps> = ({children}) => {
    return (
        <main>
            {children}
        </main>
    );
};

export default Content;
