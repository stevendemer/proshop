import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface CartState {
    products: IProduct[],
    cartTotalQuantity: number,
    cartTotalAmount: number,
    loading: 'idle' | 'loading' | 'succeeded' | 'failed'
};

const initialState: CartState = {
    products: (
        localStorage.getItem("products") ?
            JSON.parse(localStorage.getItem("products")!) // the value can never be null
            : []
    ),
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    loading: 'idle'
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            const productIndex = state.products.findIndex(
                (prod: IProduct) => prod._id === action.payload._id // the product is already there
            );
            // increase the quantity by 1 
            if (productIndex >= 0) {
                state.products[productIndex] = {
                    ...state.products[productIndex],
                    cartQuantity: state.products[productIndex].cartQuantity + 1,
                };
                toast.success("Increased product quantity by 1 !", {
                    position: "bottom-center"
                });
            } else {
                let tmpProduct = { ...action.payload, cartQuantity: 1 };
                state.products.push(tmpProduct);
                toast.success("Product added to cart !", {
                    position: "bottom-left"
                });
            }
            localStorage.setItem("products", JSON.stringify(state.products));
        },
        decreaseCart(state, action) {
            const itemIndex = state.products.findIndex(
                (item: IProduct) => item._id === action.payload._id
            );
            // the product is already in the cart
            if (itemIndex > 0) {
                if (state.products[itemIndex].cartQuantity > 1) {
                    state.products[itemIndex].cartQuantity -= 1;
                    toast.info("Decreased product quantity !", {
                        position: "bottom-left"
                    });
                } else if (state.products[itemIndex].cartQuantity === 1) {
                    const nextCartItem = state.products.filter(
                        (item) => item._id !== action.payload._id
                    );
                    state.products = nextCartItem;

                    toast.error("Product removed from cart !", {
                        position: "bottom-left"
                    });
                }
            }
            // the product does not exist in the cart
            localStorage.setItem("products", JSON.stringify(state.products));
        },
        removeProductFromCart(state, action) {
            state.products.map((cartItem: IProduct) => {
                if (cartItem._id === action.payload.id) {
                    const nextCartItems = state.products.filter(
                        (item: IProduct) => item._id !== cartItem._id
                    );
                    state.products = nextCartItems;

                    toast.error("Product removed from cart !", {
                        position: "bottom-left"
                    });
                }
                localStorage.setItem("products", JSON.stringify(state.products));
                return state;
            })
        },
        getTotals(state) {
            let { total, quantity } = state.products.reduce(
                (cartTotal: { total: number, quantity: number }, cartItem: any) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        clearCart(state) {
            state.products = [];
            localStorage.setItem("products", JSON.stringify(state.products));
            toast.success("Cart cleared", { position: "bottom-left" });
        },
    }
});

export const { addProduct, removeProductFromCart, clearCart, getTotals, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;