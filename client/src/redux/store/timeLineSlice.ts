import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TimeLineState {
    isCutting: boolean,
    duration: number
}

export const timeLineSlice = createSlice({
    name: "timeline",
    initialState: {} as TimeLineState,
    reducers: {
        setIsCutting: (state, action: PayloadAction<boolean>) => {
            console.log(action.payload);
            state.isCutting = action.payload
        },

        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
        }
    }
})

export const {setIsCutting, setDuration} = timeLineSlice.actions;
export default timeLineSlice.reducer;