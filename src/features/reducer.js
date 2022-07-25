import { combineReducers } from "redux"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./auth/authSlice";

const persistConfig =  {
    key: "root",
    storage,
    whitelist: ["auth"]
}

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer
})

const persistedtedReducer = persistReducer(persistConfig, rootReducer);

export default persistedtedReducer