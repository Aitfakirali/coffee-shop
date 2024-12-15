import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TLoyalCustomers = {
    customerId: number;
    name: string;
    profileImage: string;
    countProducts: number;
};

export const customersApi = createApi({
    reducerPath: 'customersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
    endpoints: (builder) => ({
        getLoyalCustomers: builder.query<TLoyalCustomers[], unknown>({
            query: () => `customers/loyal`,
        }),
    }),
});

export const { useGetLoyalCustomersQuery } = customersApi;
