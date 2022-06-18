import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productsReducer, { productFetchID, productsFetch } from '../features/products/productsSlice';
import { productsAPI } from '../features/services/productsAPI';
import cartReducer, { getTotals } from '../features/products/cartSlice';
import logger from 'redux-logger';

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
        products: productsReducer,
        cart: cartReducer,
    },
    // adding the api middleware enables caching, validation, polling 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware, logger),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

