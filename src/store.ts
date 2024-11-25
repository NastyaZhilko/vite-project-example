import {configureStore} from '@reduxjs/toolkit'
import {useSelector} from "react-redux";
import {initialUsersList, usersSlice} from "./modules/users/users.slice.ts";
import {countersReducer} from "./modules/counters/counters.slice.ts";


export const store = configureStore({
    reducer: {
        counters: countersReducer,
        [usersSlice.name]: usersSlice.reducer
    }
})

store.dispatch(usersSlice.actions.stored({users: initialUsersList}))

export type AppState = ReturnType<typeof store.getState>

export const useAppSelector = useSelector.withTypes<AppState>()