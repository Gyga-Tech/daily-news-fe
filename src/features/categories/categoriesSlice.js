import { apiSlice } from "../api/apiSlice";

export const categoriesSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "/categories"
        }),
        getCategoriesId: builder.query({
            query: (id) => `/categories/${id}`
        }),
        deleteCategoriesId: builder.mutation({
            query: (id) => ({
                url: `/categories/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const {
    useGetCategoriesQuery,
    useGetCategoriesIdQuery,
    useDeleteCategoriesIdMutation,
} = categoriesSlice