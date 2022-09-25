import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface VideoState {
    videoFile: string
}

export const VideoSlice = createSlice({
    name: "video",
    initialState: {} as VideoState,
    reducers: {
        setVideo: (state, action: PayloadAction<string>) => {
            state.videoFile = action.payload
        }
    }
})

export const {setVideo} = VideoSlice.actions;
export default VideoSlice.reducer;