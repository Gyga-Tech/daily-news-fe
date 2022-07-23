import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:9511/api/v5",
})

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    endpoints: ()=> ({})
    
})