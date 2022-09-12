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
        }),
        addCategories: builder.mutation({
            query: (body)=>({
                url: "/categories",
                method: "POST",
                body: body,
            })
        }),
        updateCategories: builder.mutation({
            query: (body)=>({
                url: "/categories",
                method: "PATCH",
                body: body
            })
        })
    })
})

export const {
    useGetCategoriesQuery,
    useGetCategoriesIdQuery,
    useDeleteCategoriesIdMutation,
    useAddCategoriesMutation,
    useUpdateCategoriesMutation
} = categoriesSlice