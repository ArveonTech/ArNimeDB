import { configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "./local"; // ✅ pakai dari file lokal
import dataReducer from "./createSlice";

const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveToLocalStorage({
    data: store.getState().data,
  });
});

export default store;
