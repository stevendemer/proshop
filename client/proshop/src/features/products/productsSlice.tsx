import { createSlice, PayloadAction, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

interface ProductState {
    product: IProduct | undefined;
    status: string | undefined;
};

const initialState: ProductState = { product: undefined, status: undefined };

// fetch all the products from the server
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        try {
            const response = await axios.get(
                "http://localhost:8800/api/products"
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

// fetch the product with the id 
export const productFetchID = createAsyncThunk(
    "products/productFetchID",
    async (productID: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `http://localhost:8800/api/products/${productID}`
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state) => {
            state.status = "pending"
        }),
            builder.addCase(productsFetch.fulfilled, (state, action: PayloadAction<IProduct>) => {
                state.status = "success"
                state.product = action.payload;
            }),
            builder.addCase(productsFetch.rejected, (state) => {
                state.status = "rejected"
            }),
            builder.addCase(productFetchID.pending, (state) => {
                state.status = "pending"
            }),
            builder.addCase(productFetchID.fulfilled, (state, action: PayloadAction<IProduct>) => {
                state.status = "success"
                state.product = action.payload;
            }),
            builder.addCase(productFetchID.rejected, (state) => {
                state.status = "rejected"
            })
    }
});



export default productsSlice.reducer;