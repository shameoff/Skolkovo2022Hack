import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import constant from "@src/constants/constant";

export interface TimeLineState {
    isLeftCutting: boolean,
    isRightCutting: boolean,
    leftFrameNum: number,
    rightFrameNum: number,
    duration: number,
    framesResult: number[]
}

export const timeLineSlice = createSlice({
    name: "timeline",
    initialState: {} as TimeLineState,
    reducers: {
        setIsLeftCutting: (state, action: PayloadAction<boolean>) => {
            state.isLeftCutting = action.payload
            state.isRightCutting = false
        },

        setIsRightCutting: (state, action: PayloadAction<boolean>) => {
            state.isRightCutting = action.payload
            state.isLeftCutting = false
        },

        setleftFrameNum: (state, action: PayloadAction<number>) => {
            state.leftFrameNum = action.payload,
            state.isRightCutting = false
            state.isLeftCutting = false
        },

        setrightFrameNum: (state, action: PayloadAction<number>) => {
            state.rightFrameNum = action.payload
            state.isRightCutting = false;
            state.isLeftCutting = false
        },

        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
        },
        
        setFramesResult: (state) => {
            const cleanFrames = [];
            const frames = [];

            for (let i = state.leftFrameNum; i <= state.rightFrameNum; ++i) {
                cleanFrames.push(i);
            }

            for (let i = 1; i < state.duration; ++i) {
                if (!cleanFrames.includes(i)) frames.push(i);
            }

            axios.post(`${constant.host}/video/cut`, { frames: frames });
        }
    }
})

export const {setIsLeftCutting, setIsRightCutting, setleftFrameNum, setrightFrameNum, setDuration, setFramesResult} = timeLineSlice.actions;
export default timeLineSlice.reducer;