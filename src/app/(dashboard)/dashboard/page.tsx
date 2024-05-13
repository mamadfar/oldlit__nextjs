import React from 'react';
import Link from "next/link";
import {ImBooks, ImProfile} from "react-icons/im";
import {MdContactPhone} from "react-icons/md";

const LINKS = [
    {
        id: 1,
        title: 'Create Book',
        path: 'dashboard/books/create',
        icon: <ImBooks className="h-12 w-12 text-red-600"/>
    },
    {
        id: 2,
        title: 'Create Contact',
        path: 'dashboard/contacts/create',
        icon: <MdContactPhone className="h-12 w-12 text-red-600"/>
    },
    {
        id: 3,
        title: 'Profile',
        path: 'dashboard/profile/update',
        icon: <ImProfile className="h-12 w-12 text-red-600"/>
    },
]

const Dashboard = () => {
    return (
        <div className="h-full px-8 border-t-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                {LINKS.map(({title, path, icon, id}, index) => (
                    <Link key={id} href={path} className="flex flex-col h-40 w-full border rounded-md shadow-lg hover:border-red-600 transition-colors duration-300">
                        <div className="flex-[2] grid place-content-center border-b-2">
                            {icon}
                        </div>
                        <div className="flex-1 grid place-content-center">
                            <span>{title}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
