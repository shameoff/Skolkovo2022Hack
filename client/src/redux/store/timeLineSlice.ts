import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BaseType } from "typescript";

export interface TimeLineState {
    isCutting: boolean,
    timeLineFrames: Array<BaseType>
}

export const VideoSlice = createSlice({
    name: "video",
    initialState: {} as TimeLineState,
    reducers: {
        setIsCutting: (state, action: PayloadAction<boolean>) => {
            console.log(action.payload);
            state.isCutting = action.payload
        },

        setFrames: (state, action: PayloadAction<Array<BaseType>>) => {
            state.timeLineFrames = action.payload;
        }
    }
})

export const {setVideo} = VideoSlice.actions;
export default VideoSlice.reducer;