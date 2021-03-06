
export { };

declare global {

    interface IProduct {
        _id: string;
        name: string;
        image: string;
        description: string;
        brand: string;
        category: string;
        price: number;
        rating: number;
        countInStock: number;
        numReviews: number;
        added?: boolean;
        cartQuantity: number;
    };
}

