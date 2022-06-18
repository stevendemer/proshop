import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface CartState {
    products: IProduct[],
    cartTotalQuantity: number,
    cartTotalAmount?: number,
    loading?: 'idle' | 'loading' | 'succeeded' | 'failed'
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
        decreaseQuantity(state) {
            if (state.cartTotalQuantity > 0) {
                state.cartTotalQuantity--;
            }
        },
        addProduct(state, action: PayloadAction<IProduct>) {
            const productIndex = state.products.findIndex(
                (prod) => prod._id === action.payload._id // the product is already there
            );
            // increase the quantity by 1 if product already in cart
            if (productIndex >= 0) {
                state.products[productIndex].cartQuantity++;
                toast.success(`Increased quantity to ${state.products[productIndex].cartQuantity}`, {
                    position: "bottom-center"
                });
            } else {
                let tmpProduct = { ...action.payload, cartQuantity: 1 };
                state.products.push(tmpProduct);
                toast.success("Product added to cart !", {
                    position: "bottom-left"
                });
            }
            state.cartTotalQuantity++;
            localStorage.setItem("products", JSON.stringify(state.products));
            // console.log(state.cartTotalQuantity);
        },
        incrementQuantity(state, action: PayloadAction<{ id: string }>) {
            const productIndex = state.products.findIndex((item) => item._id === action.payload.id);
            if (productIndex >= 0) {
                state.products[productIndex].cartQuantity++;
                toast.success("Added one more product", { position: "bottom-center" });
            }
            state.cartTotalQuantity++;
        },
        decrementQuantity(state, action: PayloadAction<{ id: string }>) {
            const itemIndex = state.products.findIndex(
                (item: IProduct) => item._id === action.payload.id
            );
            // the product is already in the cart
            if (itemIndex >= 0) {
                if (state.products[itemIndex].cartQuantity > 1) {
                    state.products[itemIndex].cartQuantity -= 1;
                    toast.info("Decreased product quantity !", {
                        position: "bottom-left"
                    });
                } else if (state.products[itemIndex].cartQuantity === 1) {
                    const nextCartItem = state.products.filter(
                        (item) => item._id !== action.payload.id
                    );
                    state.products = nextCartItem;

                    toast.error("Product removed from cart !", {
                        position: "bottom-left"
                    });
                }
            }
            localStorage.setItem("products", JSON.stringify(state.products));
            if (state.cartTotalQuantity > 0) {
                state.cartTotalQuantity--;
            }
        },
        removeProductFromCart(state, action: PayloadAction<IProduct>) {
            const foundIndex = state.products.findIndex((item: IProduct) => item._id === action.payload._id);
            if (foundIndex >= 0) {
                if (state.products[foundIndex].cartQuantity > 1) {
                    state.products[foundIndex].cartQuantity--;
                } else if (state.products[foundIndex].cartQuantity === 1) {
                    state.products.splice(foundIndex, 1);
                }
                state.products = [...state.products]; // clone array
                toast.success("Product removed from cart !", {
                    position: "bottom-center"
                });
            }
            localStorage.setItem("products", JSON.stringify(state.products));
            return state;
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
            state.cartTotalQuantity = 0;
            localStorage.setItem("products", JSON.stringify(state.products));
            toast.success("Cart cleared", { position: "bottom-left" });
        },
    }
});

export const { addProduct, removeProductFromCart, incrementQuantity, clearCart, getTotals, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;