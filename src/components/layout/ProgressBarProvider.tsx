"use client";

import ProgressBar from 'next-nprogress-bar';
import {FC, ReactNode} from "react";

const ProgressBarProvider: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <>
            <ProgressBar
                height="4px"
                color="#dc2626"
                options={{ showSpinner: true }}
                shallowRouting
                appDirectory
            />
            {children}
        </>
    );
};

export default ProgressBarProvider;
