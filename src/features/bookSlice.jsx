import { createSlice } from "@reduxjs/toolkit";

const initialBook = {
    book : [
        {id : 1, title : "Advance English Grammar", author : "Rahi"},
        {id : 2, title : "English for all", author : "Rahi"},
        {id : 3, title : "English for today", author : "Rahi"},
    ],
};

export const bookSlice = createSlice({
    name : "books",
    initialState : initialBook,
    reducers : {
        showBooks : (state) => state,
    } 

});

export const { showBooks } = bookSlice.actions;
export default bookSlice.reducer;