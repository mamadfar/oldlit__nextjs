
export interface IPremiumPackage {
    createdAt: string;
    description: string;
    duration: number;
    id: number;
    name: string;
    price: number;
    updatedAt: string;
}

export interface ISubscription {
    bookID: number | string,
    packageID: number | string
}

export interface ISubscriptionResponse {
    url: string
}