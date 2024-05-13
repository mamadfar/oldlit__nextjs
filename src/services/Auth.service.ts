import API from "@/config/API";
import {ILoginResponse, LoginStateForm_Type, RegisterStateForm_Type} from "@/types/Auth.type";

export const LoginService = (payload: LoginStateForm_Type) => {
    return API.post<ILoginResponse>(
        `/users/login`,
        // `http://127.0.0.1:5000/users/login`,
        payload,
    )
}

export const RegisterService = (payload: RegisterStateForm_Type) => {
    return API.post(
        `/users`,
        payload,
    )
}

export const SilentLoginService = (refreshToken: string) => {
    return API.post<ILoginResponse>('/users/auth/token', {refreshToken})
}