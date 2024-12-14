import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from './category';

export type TReward = {
    rewardId: number;
    title: string;
    imageUrl: string;
    description: string;
    points: string;
    category: Category;
};

export type TPopularRawards = Partial<TReward> & {
    count: number;
};

export const rewardsApi = createApi({
    reducerPath: 'rewardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
    tagTypes: ['rewards', 'popular'],
    endpoints: (builder) => ({
        getRewards: builder.query<TReward[], unknown>({
            query: () => `rewards`,
            providesTags: ['rewards'],
        }),
        getPopularRewards: builder.query<TPopularRawards[], unknown>({
            query: () => 'rewards/popular',
            providesTags: ['rewards', 'popular'],
        }),
        saveReward: builder.mutation({
            query: (body) => {
                return {
                    url: 'rewards',
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: ['rewards'],
        }),
        updateReward: builder.mutation({
            query: ({ rewardId, ...body }) => {
                return {
                    url: `rewards/${rewardId}`,
                    method: 'PUT',
                    body,
                };
            },
            invalidatesTags: ['rewards'],
        }),
        deleteReward: builder.mutation({
            query: (rewardId: number) => ({
                url: `rewards/${rewardId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['rewards'],
        }),
    }),
});

export const {
    useGetRewardsQuery,
    useSaveRewardMutation,
    useUpdateRewardMutation,
    useDeleteRewardMutation,
    useGetPopularRewardsQuery,
} = rewardsApi;
