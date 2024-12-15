import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Sales = {
    date: Date;
    sales: string;
};

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
    endpoints: (builder) => ({
        getSalesCurrentMonth: builder.query<Sales[], void>({
            query: () => `products/sales`,
        }),
    }),
});

export const { useGetSalesCurrentMonthQuery } = productsApi;
