import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface VideoState {
    videoFile: File
}

export const VideoSlice = createSlice({
    name: "video",
    initialState: {} as VideoState,
    reducers: {
        setVideo: (state, action: PayloadAction<File>) => {
            console.log(action.payload);
            state.videoFile = action.payload
        }
    }
})

export const {setVideo} = VideoSlice.actions;
export default VideoSlice.reducer;