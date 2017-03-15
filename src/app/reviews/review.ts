export interface Review {
    id: number;
    created?: Date;
    product: string;
    rating: number;
    comment: string;
    approved?: boolean;
    visible?: boolean;
}
