import { createSlice } from "@reduxjs/toolkit";

const initialBook = {
    book : [
        {id : 1, title : "Advance English Grammar", author : "Rahi"},
        {id : 2, title : "English for all", author : "Rahi"},
        {id : 3, title : "English for today", author : "Rahi"},
    ],
};

export const bookSlice = createSlice({
    name : "book",
    initialState : initialBook,
    reducers : {
        showBooks : (state) => state,
        addBooks : (state, action ) => {
            state.book.push(action.payload)
        },
        deleteBook : (state, action ) => {
            const id = action.payload;
            state.book = state.book.filter(book => book.id != id)
            
        },
    } 

});

export const { showBooks, addBooks, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;