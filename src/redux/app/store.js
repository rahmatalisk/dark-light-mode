import { configureStore } from "@reduxjs/toolkit";
import themeSLice from "./theme/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeSLice.reducer,
  },
});

export default store;
