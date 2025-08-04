export interface Book {
    id: string;
    name: string;
    author: string;
    publishedOn: string;
    price: number;

    // Additional properties
    storeOwner?: string;
}