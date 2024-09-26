import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'filter',
    initialState: {
        name: '',
    },
    reducers: {
        setFilter: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { setFilter } = slice.actions;

export const filterReducer = slice.reducer;
