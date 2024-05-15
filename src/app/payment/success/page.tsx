import {Button, Result} from "antd";
import Link from "next/link";

const SuccessPayment = (
    {searchParams}: {
        searchParams: { b_id: string | string[] | undefined }
    }) => {

    return (
        <div className="grid h-full place-content-center dark:!text-white">
            <Result
                status="success"
                title={<p className="dark:!text-white">Successfully Purchased the plan!</p>}
                subTitle={(<p className="dark:!text-white">Now you can check your book has <b>Premium</b> tag.</p>)}
                className="dark:text-white"
                extra={[
                    <Link key={`/books/${searchParams.b_id}`} href={`/books/${searchParams.b_id}`} className="dark:!text-white">
                        <Button>Your Book</Button>
                    </Link>,
                ]}
            />
        </div>
    );
};

export default SuccessPayment;
