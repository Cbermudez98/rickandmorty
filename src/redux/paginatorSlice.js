import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    next: 0,
    prev: 0,
    pages: [],
    current: 0,
    maxPages: 0
};

const getPages = (page, currentPage) => {
    const res = [];
    let index = 0;
    let limit = 4;
    if (page === currentPage) return [page];
    currentPage--;
    while(index < limit) {
        index++;
        res.push(currentPage++);
    }
    res.push("...");
    return res.filter((x) => x !== 0);
};

const handlePages = (info, page) => {
    return {
      next: page + 1,
      prev: page - 1,
      pages: getPages(info, page),
      current: page
    };
};

export const paginatorSlice = createSlice({
    name: "paginator",
    initialState,
    reducers: {
        setPaginator: (state, action) => {
            const { maxPages, current } = action.payload;
            const listPage = handlePages(maxPages, current);
            state.current = listPage.current;
            state.next = listPage.next;
            state.prev = listPage.prev;
            state.current = listPage.current;
            state.pages = listPage.pages;
        }
    }
});

export const { setPaginator } = paginatorSlice.actions;
export default paginatorSlice.reducer;