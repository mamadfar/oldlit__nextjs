'use client'

import {FC, useState} from 'react';
import {Drawer, message} from "antd";
import {useMutation, useQuery} from "@tanstack/react-query";
import {PremiumPackagesService, SubscribeService} from "@/services/Subscription.service";
import Loading from "@/app/loading";
import {ISubscription} from "@/types/Subscription.type";
import { useParams, useRouter} from "next/navigation";

const PremiumSubscription = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    return (
        <div>
            <div>
                <button
                    onClick={showDrawer}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Premium
                        </span>
                </button>
            </div>
            {open && <PremiumDrawer open={open} setOpen={setOpen}/>}
        </div>
    );
};

export default PremiumSubscription;

//* Internal Components
const PremiumDrawer: FC<{ open: boolean, setOpen: (open: boolean) => void }> = ({open, setOpen}) => {

    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();

    const {bookId} = useParams<{ bookId: string }>();

    const {data, isPending: isPackagesPending} = useQuery({queryKey: ['packages'], queryFn: PremiumPackagesService});

    const {mutate, isPending: isSubscribePending} = useMutation({mutationKey: ['subscribe'], mutationFn: async (payload: ISubscription) => {
        const {data, status} = await SubscribeService(payload);
        if (status === 201) {
            messageApi.success({
                content: 'You will be redirected...',
                duration: 2,
                key: 'updatable',
            });
            router.push(data.url)
        }
        return data;
        }});

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            // title="Make it premium?"
            placement='top'
            height={'fit-content'}
            // width={500}
            onClose={onClose}
            open={open}
        >
            {(isPackagesPending || isSubscribePending) ? (
                <Loading/>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
                    {data?.data.map((premiumPackage, index) => (
                        <div key={premiumPackage.id} className="px-2 sm:px-10 text-center text-white">
                            <div
                                onClick={() => mutate({bookID: bookId, packageID: premiumPackage.id})}
                                className={`max-w-sm rounded overflow-hidden shadow-lg cursor-pointer ${index === 1 ? 'bg-red-500 hover:bg-red-600 transition duration-500' : 'border border-red-600 text-red-600'}`}>
                                <div className="space-y-5">
                                    <div className="px-6 py-4">
                                        <div className="space-y-5">
                                            <div className="font-bold text-xl mb-2">{premiumPackage.name}</div>
                                            <p className="text-base">
                                                ${premiumPackage.price}
                                            </p>
                                            <p>{premiumPackage.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Drawer>
    );
}
