import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    scrollTop: 0,
    scrollDirection: "",
    logoObserver: false,
    appointmentButtonObserver: false,
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
        setLogoObserver: (state, action) => {
            state.logoObserver = action.payload;
        },
        setAppointmentButtonObserver : (state, action ) => {
            state.appointmentButtonObserver = action.payload;
        },
    }
})

export const { setScrollTop } = navSlice.actions;
export const { setScrollDirection } = navSlice.actions;
export const { setLogoObserver } = navSlice.actions;
export const { setAppointmentButtonObserver } = navSlice.actions;

export const selectScrollTop = (state) => state.nav.scrollTop;
export const selectScrollDirection = (state) => state.nav.scrollDirection;
export const selectLogoObserver = (state) => state.nav.logoObserver;
export const selectAppointmentButtonObserver = (state) => state.nav.appointmentButtonObserver;

export default navSlice.reducer;