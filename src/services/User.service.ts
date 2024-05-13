import API from "@/config/API";
import {IUpdateUser, IUserResponse} from "@/types/User.type";

export const GetUserService = () => {
    return API.get<IUserResponse>(`/users/profile/me`)
}

export const UpdateUserService = (payload: IUpdateUser) => {
    return API.put<IUserResponse>('/users', payload)
}