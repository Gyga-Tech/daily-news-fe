import { apiSlice } from "../api/apiSlice";

export const articleSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getArticle: builder.query({
            query: ({ categories,
                sortby = "created_at",
                limit = "5",
                order = "desc",
                page = "1",
                search = ''
            }) => `/articles?${categories ? "categories="
                + categories + "&sortby=" + sortby :
                "sortby=" + sortby}&search=${search}&limit=${limit}&page=${page}&order=${order}`
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
            query: (id) => ({
                url: `/articles/${id}`,
                method: "DELETE",
            })
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