import {ImSpinner10} from "react-icons/im";

const Loading = () => {
    return (
        <div className="flex h-full justify-center items-center">
            <ImSpinner10 className="animate-spin w-8 h-8 text-red-600"/>
        </div>
    );
};

export default Loading;
