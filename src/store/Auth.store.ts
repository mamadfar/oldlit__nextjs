import {create} from "zustand";
import {subscribeWithSelector} from "zustand/middleware";
import Cookies from "js-cookie";
import {Is_Logged_In, OLD_LIT_U} from "@/config";
import {RegisterStateForm_Type} from "@/types/auth.type";

interface IState {
    isAuthenticated: boolean;
    isLoggedIn: boolean;
    user: RegisterStateForm_Type | null;
}

interface IActions {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    logout: () => void;
}
export const useAuthStore = create<IState & IActions>()(subscribeWithSelector((set) => ({
    isAuthenticated: false,
    isLoggedIn: Cookies.get(Is_Logged_In) ? JSON.parse(Cookies.get(Is_Logged_In) as string) : false,
    user: Cookies.get(OLD_LIT_U) ? JSON.parse(Cookies.get(OLD_LIT_U) as string) : null,
    setIsLoggedIn: isLoggedIn => set(() => ({isLoggedIn})),
    logout: () => set(() => {
        Cookies.set(Is_Logged_In, 'false')
        return {isLoggedIn: false}
    })
})));

useAuthStore.subscribe((state) => state.user, (user) => {
    if (user) {
        useAuthStore.setState({ isAuthenticated: true });
    }
})