import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {recipeService} from '../../../services/api.service.ts';
import {IRecipe} from '../../../models/IRecipe.ts';


interface RecipeState {
    recipes: IRecipe[];
    currentPage: number;
    totalRecipes: number;
    loading: boolean;
    error: string | null;
}

const initialState: RecipeState = {
    recipes: [],
    currentPage: 0,
    totalRecipes: 0,
    loading: false,
    error: null,
};

export const loadRecipes = createAsyncThunk(
    'recipeSlice/loadRecipes',
    async (page: number, {rejectWithValue}) => {
        try {
            const response = await recipeService.getAll(page, 30);
            return { recipes: response.recipes, total: response.total };
        } catch (error) {
            return rejectWithValue('Error loading recipes');
        }
    }
);

const recipeSlice = createSlice({
    name: 'recipeSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadRecipes.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadRecipes.fulfilled, (state, action) => {
                state.recipes = action.payload.recipes;
                state.totalRecipes = action.payload.total;
                state.loading = false;
            })
            .addCase(loadRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const {setCurrentPage} = recipeSlice.actions;
export default recipeSlice.reducer;

