// create your RTK Query endpoints here
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const quotesAPI = createApi({
    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9009/api/quotes'
    }),
    tagTypes: ['Quotes'],
    endpoints: (builder) => ({
        getQuotes: builder.query({
            query: () => 'quotes', 
            providesTags: ['Quotes']
        }),

        createQuote: builder.mutation({

        }),

        deleteQuote: builder.mutation({

        }),

        toggleFake: builder.mutation({

        }),
    })
});

export const {
    useGetQuotesQuery,
    useCreateQuoteMutation,
    useDeleteQuoteMutation,
    useToggleFakeMutation 
} = quotesAPI;