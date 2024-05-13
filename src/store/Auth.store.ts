import {create} from "zustand";
import {subscribeWithSelector} from "zustand/middleware";
import Cookies from "js-cookie";
import {OLD_LIT_AT, OLD_LIT_RT} from "@/config";
import {RegisterStateForm_Type} from "@/types/Auth.type";

interface IState {
    isAuthenticated: boolean;
    user: RegisterStateForm_Type | null;
}

interface IActions {
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    logout: () => void;
}

const cookie = Cookies.get(OLD_LIT_AT) || '{}';
export const useAuthStore = create<IState & IActions>()(subscribeWithSelector((set) => ({
    isAuthenticated: !!(Cookies.get(OLD_LIT_AT) && Cookies.get(OLD_LIT_RT)),
    user: cookie ? JSON.parse(cookie) : null,
    setIsAuthenticated: isAuthenticated => set(() => ({isAuthenticated})),
    logout: () => set(() => {
        Cookies.remove(OLD_LIT_AT)
        Cookies.remove(OLD_LIT_RT)
        return {isAuthenticated: false}
    })
})));

useAuthStore.subscribe((state) => state.user, (user) => {
    if (user) {
        useAuthStore.setState({ isAuthenticated: true });
    }
})