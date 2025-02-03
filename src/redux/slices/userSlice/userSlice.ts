import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {userService} from '../../../services/api.service';
import {IUser} from '../../../models/IUser';

interface UserState {
    users: IUser[];
    currentPage: number;
    totalUsers: number;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    currentPage: 0,
    totalUsers: 0,
    loading: false,
    error: null,
};

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (page: number, {rejectWithValue}) => {
        try {
            const response = await userService.getAll(page, 30);
            return { users: response.users, total: response.total };
        } catch (error) {
            return rejectWithValue('Error loading users');
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload.users;
                state.totalUsers = action.payload.total;
                state.loading = false;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const {setCurrentPage} = userSlice.actions;
export default userSlice.reducer;


