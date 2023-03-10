import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { petApi } from './petApiService';
import adoptedPet from './reduxSlice/adoptedPedSlice';
import searchParams from './reduxSlice/searchParamsSlice';

const store = configureStore({
    reducer: {
        adoptedPet,
        searchParams,
        [petApi.reducerPath]: petApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default store;