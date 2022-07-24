import { apiSlice } from "../api/apiSlice";

export const  articleSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getArticle: builder.query({
            query: ({categories, 
                sortby="created_at", 
                limit="5", 
                order="desc", 
                page="1",
<<<<<<< HEAD
             }) => `/articles?${categories ? "categories=" + categories : "sortby=" + sortby}&limit=${limit}&page=${page}&order=${order}`
=======
             }) => `/articles?${categories ? "categories=" 
             + categories + "&sortby=" + sortby : 
             "sortby=" + sortby}&limit=${limit}&page=${page}&order=${order}`
>>>>>>> 5b1eea0b207dee89dfb58d5adc330d7f4d8fdfad
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