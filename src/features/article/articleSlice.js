import { apiSlice } from "../api/apiSlice";

export const  articleSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getArticle: builder.query({
            query: ({categories, 
                sortby="created_at", 
                limit="5", 
                order="desc", 
                page="1",
             }) => `/articles?${categories ? "categories=" 
             + categories + "&sortby=" + sortby : 
             "sortby=" + sortby}&limit=${limit}&page=${page}&order=${order}`
        }),
        getArticleId: builder.query({
            query: (id) => `/articles/${id}`
        }),
        addArticle: builder.mutation({
            query: (body) => ({
                url: "/articles",
                method: "POST",
                body: body,
            })
        }),
        updateArticle: builder.mutation({
            query: (body) => ({
                url: "/articles",
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