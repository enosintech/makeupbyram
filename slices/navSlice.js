import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    scrollTop: 0,
    scrollDirection: "",
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setScrollTop: (state, action ) => {
            state.scrollTop = action.payload;
        },
        setScrollDirection: (state, action) => {
            state.scrollDirection = action.payload;
        },
    }
})

export const { setScrollTop } = navSlice.actions;
export const { setScrollDirection } = navSlice.actions;

export const selectScrollTop = (state) => state.nav.scrollTop;
export const selectScrollDirection = (state) => state.nav.scrollDirection;

export default navSlice.reducer;