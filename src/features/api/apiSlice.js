import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout } from '../auth/authSlice'


const baseQuery = fetchBaseQuery({
    baseUrl: "https://gyga-news.herokuapp.com/api/v1",
    prepareHeaders: (headers, {getState}) => {
        const token = getState().auth.token
        if(token) {
            headers.set("authorization", token)
    
        }
        return headers
    }
})

const veryBaseQuery = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if(result?.error?.status === 401) {
        api.dispatch(logout())
    }
    return result
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: veryBaseQuery,
    endpoints: ()=> ({})
    
})