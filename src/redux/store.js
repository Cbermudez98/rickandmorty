import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./searchSlice.js";
import paginatorSlice from "./paginatorSlice.js";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        paginator: paginatorSlice
    }
});