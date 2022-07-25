import {createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: {userId: null, token: null},
    reducers: {
        setCredentials: (state, action) => {
            const {user_id, token, role} = action.payload;
            state.userId = user_id;
            state.token = token;
        },
        logout: (state, action) => {
            state.userId = null;
            state.token = null;
        }
    }
})

export const {setCredentials, logout} = authSlice.actions
export default authSlice.reducer;
