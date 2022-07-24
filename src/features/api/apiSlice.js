import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
    baseUrl: "https://gyga-news.herokuapp.com/api/v1",
})

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    endpoints: ()=> ({})
    
})