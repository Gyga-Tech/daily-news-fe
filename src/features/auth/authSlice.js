import {createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: {userId: null, token: null, role: null},
    reducers: {
        setCredentials: (state, action) => {
            const {user_id, token, role} = action.payload;
            state.userId = user_id;
            state.token = token;
            state.role = role;
        },
        logout: (state, action) => {
            state.userId = null;
            state.token = null;
            state.role = null;
        }
    }
})

export const {setCredentials, logout} = authSlice.actions
export default authSlice.reducer;
