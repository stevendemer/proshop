import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer, { productFetchID, productsFetch } from '../features/products/productsSlice';
import { productsAPI } from '../features/services/productsAPI';
import cartReducer, { getTotals } from '../features/products/cartSlice';

// custom middleware 
const delayMiddleware = store => next => action => {
    console.log("Middleware triggered: ", action);
    setTimeout(() => {
        next(action);
    }, 1200);
}

export const store = configureStore({
    reducer: {
        [productsAPI.reducerPath]: productsAPI.reducer,
        product: productReducer,
        cart: cartReducer,
    },
    // adding the api middleware enables caching, validation, polling 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsAPI.middleware).concat(delayMiddleware)
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

