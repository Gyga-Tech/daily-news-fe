import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body: body
            })
        }),
        register: builder.mutation({
            query: (body) => ({
                url: "/auth/register",
                method: "POST",
                body: body
            })
            
        })
    })
})

export const {
    useSigninMutation,
    useRegisterMutation
} = authApiSlice