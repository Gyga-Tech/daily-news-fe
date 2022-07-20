import { combineReducers } from "redux"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "./api/apiSlice";

const persistConfig =  {
    key: "root",
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
})

const persistedtedReducer = persistReducer(persistConfig, rootReducer);

export default persistedtedReducer