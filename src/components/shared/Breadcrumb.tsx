'use client'

import {usePathname, useRouter} from "next/navigation";

const Breadcrumb = () => {

    const router = useRouter()
    const path = usePathname()

    console.log(path)
    return (
        <div className="text-xs">
<small>{path}</small>
        </div>
    );
};

export default Breadcrumb;
