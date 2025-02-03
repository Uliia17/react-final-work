import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice/userSlice.ts';
import recipeSlice from './slices/recipeSlice/recipeSlice.ts';

export const store = configureStore({
    reducer: {
        userSlice,
        recipeSlice,
    },
});



