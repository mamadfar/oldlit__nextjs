import Cookies from "js-cookie";
import {OLD_LIT_AT, OLD_LIT_RT} from "@/config";
import {ILoginResponse} from "@/types/Auth.type";

const AuthCookieSetterUtil = ({accessToken, refreshToken}: ILoginResponse) => {
    Cookies.set(OLD_LIT_AT, JSON.stringify(accessToken), {expires: 1/24})
    Cookies.set(OLD_LIT_RT, JSON.stringify(refreshToken), {expires: 7})
}

export default AuthCookieSetterUtil;