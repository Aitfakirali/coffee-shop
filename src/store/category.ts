import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Category = {
    categoryId: number;
    title: string;
    imageUrl: string;
};

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], unknown>({
            query: () => `categories`,
        }),
    }),
});

export const { useGetCategoriesQuery } = categoriesApi;
