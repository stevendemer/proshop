import { createSlice, PayloadAction, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import axios from 'axios';

interface ProductsState {
    products: IProduct[],
    loading: 'idle' | 'loading' | 'succeeded' | 'failed'
};

const initialState: ProductsState = { products: [], loading: 'idle' };

// fetch all the products from the server
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/products"
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
                `http://localhost:5000/api/products/${productID}`
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const productsSlice: any = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state: RootState, action: PayloadAction<IProduct>) => {
            state.loading = "loading"
        },
        [productsFetch.fulfilled]: (state: RootState, action: PayloadAction<IProduct>) => {
            state.products = action.payload;
            state.loading = "succeeded";
        },
        [productsFetch.rejected]: (state: RootState, action: PayloadAction<IProduct>) => {
            state.loading = "failed";
        },
        [productFetchID.pending]: (state: RootState, action: PayloadAction<IProduct>) => {
            state.loading = "loading"
        },
        [productFetchID.fulfilled]: (state: RootState, action: PayloadAction<IProduct>) => {
            state.products = action.payload;
            state.loading = "succeeded";
        },
        [productFetchID.rejected]: (state: RootState, action: PayloadAction<IProduct>) => {
            state.loading = "failed";
        }
    }
});



export default productsSlice.reducer;