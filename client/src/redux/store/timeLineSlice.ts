import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TimeLineState {
    isCutting: boolean,
    timeLineFrames: ArrayBuffer[]
}

export const VideoSlice = createSlice({
    name: "video",
    initialState: {} as TimeLineState,
    reducers: {
        setIsCutting: (state, action: PayloadAction<boolean>) => {
            console.log(action.payload);
            state.isCutting = action.payload
        },

        setFrames: (state, action: PayloadAction<ArrayBuffer[]>) => {
            state.timeLineFrames = action.payload;
        }
    }
})

export const {setIsCutting, setFrames} = VideoSlice.actions;
export default VideoSlice.reducer;