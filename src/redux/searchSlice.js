import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    page: 1
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        type: (state, action) => {
            let { search = "", page = 1 } = action.payload;
            state.search = search;
            state.page = page;
        }
    }
});

export const { type } = searchSlice.actions;
export default searchSlice.reducer;