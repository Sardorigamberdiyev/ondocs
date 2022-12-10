import { createSlice } from '@reduxjs/toolkit';

export interface ILowVisionState {
    isActive: boolean;
}

const initialState: ILowVisionState = {
    isActive: false
}

export const lowVisionSlice = createSlice({
    name: 'low-vision',
    initialState,
    reducers: {
        active: (state) => {
            state.isActive = true;
        },
        disable: (state) => {
            state.isActive = false;
        }
    }
});

export const { active, disable } = lowVisionSlice.actions;

export default lowVisionSlice.reducer;