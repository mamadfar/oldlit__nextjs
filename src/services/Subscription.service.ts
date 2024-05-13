import API from "@/config/API";
import {IPremiumPackage, ISubscription, ISubscriptionResponse} from "@/types/Subscription.type";

export const PremiumPackagesService = () => {
    return API.get<IPremiumPackage[]>('/packages');
}

export const SubscribeService = (payload: ISubscription) => {
    return API.post<ISubscriptionResponse>('/subscriptions/subscribe', payload);
}