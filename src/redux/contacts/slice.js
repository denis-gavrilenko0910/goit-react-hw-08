import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const slice = createSlice({
    name: 'constacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                console.log(action.payload);

                state.error = action.payload;
                state.loading = false;
            })
            .addCase(addContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(
                    (contact) => contact.id !== action.payload.id
                );
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const contactsReducer = slice.reducer;
