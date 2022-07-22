import { apiSlice } from "../api/apiSlice";

export const  articleSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getArticle: builder.query({
            query: () => "/photos"
        }),
        getArticleId: builder.query({
            query: (id) => `/photos/${id}`
        }),
        addArticle: builder.mutation({
            query: (body) => ({
                url: "/article",
                method: "POST",
                body: body,
            })
        }),
        updateArticle: builder.mutation({
            query: (body) => ({
                url: "/article",
                method: "PATCH",
                body: body,
            })
        }),
        deleteArticle: builder.mutation({
            query: (id) => `/article/${id}`
        })
    })
})

export const {
    useGetArticleQuery,
    useGetArticleIdQuery,
    useAddArticleMutation,
    useUpdateArticleMutation,
    useDeleteArticleMutation 
} = articleSlice