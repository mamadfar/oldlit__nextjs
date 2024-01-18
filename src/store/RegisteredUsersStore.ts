import {createStore} from "zustand";

interface IState {
    registeredUsers: any[];
}

interface IActions {
    setRegister: (user: any[]) => void;
}

const useRegisterStore = createStore<IState & IActions>((set) => ({
    registeredUsers: [],
    setRegister: (user: any[]) => set({registeredUsers: user}),
}));
