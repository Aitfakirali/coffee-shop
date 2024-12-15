import { configureStore } from '@reduxjs/toolkit';

// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query'

import { categoriesApi } from './category';
import { rewardsApi } from './reward';
import { customersApi } from './customer';

export const store = configureStore({
    reducer: {
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [rewardsApi.reducerPath]: rewardsApi.reducer,
        [customersApi.reducerPath]: customersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            categoriesApi.middleware,
            rewardsApi.middleware,
            customersApi.middleware,
        ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
