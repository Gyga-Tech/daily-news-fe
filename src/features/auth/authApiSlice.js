import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (body) => ({
                url: "/authentication/signin",
                method: "POST",
                body: body
            })
        }),
        register: builder.mutation({
            url: "/authentication/signin",
            method: "POST",
            body: body
        })
    })
})

export const {
    useSigninMutation,
    useRegisterMutation
} = authApiSlice