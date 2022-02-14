import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { marvelApi } from "../features/slice/marvelApiSlice";
import marvelReducer from "../features/slice/marvelSlice";

export const store = configureStore({
  reducer: {
    [marvelApi.reducerPath]: marvelApi.reducer,
    marvel: marvelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(marvelApi.middleware),
});

setupListeners(store.dispatch);

// root redux types based on store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
