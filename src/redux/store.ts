import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./slices/users"
import animalsReducer from "./slices/animals"

export const store = configureStore({
  reducer: {
    users: usersReducer,
    animals: animalsReducer,
  }
})

export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch
