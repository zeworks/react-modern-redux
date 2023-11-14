import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../domain/user";

export type State = {
  users: Array<User>
}

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: []
  },
  reducers: {
    create: (state: State, action: PayloadAction<User>) => {
     state.users.push(action.payload)
    }
  }
})

export const { create } = usersSlice.actions
export default usersSlice.reducer
