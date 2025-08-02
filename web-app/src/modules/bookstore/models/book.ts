export interface Book {
    id: string;
    title: string;
    author: string;
    publishedOn: string;
    price: number;

    // Additional properties
    storeOwner?: string;
}