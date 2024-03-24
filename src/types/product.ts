export interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    category: string;
    details: string;
    discount: number;
    images: [
        {
            id: number;
            url: string;
            product_id: string;
        }
    ]
}

export interface ProductDetails {
    id: number;
    details: string;
    product_id: number;
}

export type ProductWithDetails = Product & ProductDetails;