import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import timeLineReducer from "./timeLineSlice"

export const store = configureStore({
  reducer: {
    video: videoReducer,
    timeLine: timeLineReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
