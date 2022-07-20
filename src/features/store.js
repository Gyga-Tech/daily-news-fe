import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { apiSlice } from "./api/apiSlice";
import rootReducer from "./reducer";

const logger = createLogger();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware, logger)
})

export default store