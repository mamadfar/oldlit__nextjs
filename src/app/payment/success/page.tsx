'use client'

import {Button, Result} from "antd";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {useEffect} from "react";

const SuccessPayment = () => {

    const searchParam = useSearchParams();

    useEffect(() => {
        const params = new URLSearchParams(searchParam);
        console.log(params.get('b'));
    }, []);

    return (
        <div className="grid h-full place-content-center">
            <Result
                status="success"
                title="Successfully Purchased the plan!"
                subTitle={(<p>Now you can check your book has <b>Premium</b> tag.</p>)}
                className=""
                extra={[
                    <Link href={'/'}>
                        <Button>Your Book</Button>
                    </Link>,
                ]}
            />
        </div>
    );
};

export default SuccessPayment;
