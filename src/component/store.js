import {configureStore} from '@reduxjs/toolkit';
import adoptedPet from './reduxSlice/adoptedPedSlice';
import searchParams from './reduxSlice/searchParamsSlice';

const store = configureStore({
    reducer: {
        adoptedPet,
        searchParams
    },
});

export default store;