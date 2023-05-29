import axios from "axios";

// * base url to set the request api url
axios.defaults.baseURL = "https://private-72d778-bookstore.apiary-mock.com";

// * request
axios.interceptors.request.use(
    async (config: any) => {
        if (typeof window !== "undefined") {
            // const Token = Cookies.get("token");

            config.headers["Content-Type"] = "application/json";
            config.headers["Accept"] = "*/*";
            // config.headers["Access-Control-Allow-Origin"] = "*";
            config.headers["Accept-Language"] = "en";

            // if (Token) {
            //     config.headers["Session-Token"] = `${JSON.parse(Token)}`;
            // }

        }
        return config;
    },
    (err) => {
        if (err) {
            console.error("Something went wrong.");
        }
        return Promise.reject(err);
    }
);

// * response
axios.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error && typeof error.response === "undefined") {
            console.error("error", "Something went wrong.");
        } else {
            switch (error.response.status) {
                case 429:
                    console.error("Too many request.");
                    break;
                case 401:
                    console.error("Please login again.");
                    break;
                case 422:
                    console.error("Please check your data.");
                    break;
                case 403:
                    console.error("Invalid authorization");
                    break;
                default:
                    console.error("Something went wrong.");
            }
            const expectedError =
                error.response &&
                error.response.status >= 400 &&
                error.response.status < 500;
            if (!expectedError) {
                console.error("Something went wrong.");
            }
        }
        return Promise.reject(error);
    }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
};
