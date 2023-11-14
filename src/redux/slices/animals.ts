import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Animal } from "../../domain/animal"


type AnimalsStoreState = {
  animals?: Array<Animal>
}

const initialState: AnimalsStoreState = {
  animals: []
}

// eslint-disable-next-line
export const animalsSlice = createSlice({
  initialState,
  name: "animals",
  reducers: {
    add: (state: AnimalsStoreState, action: PayloadAction<Animal>) => {
      state.animals?.push(action.payload)
    },
    remove: (state: AnimalsStoreState, action: PayloadAction<string>) => {
     state.animals = (state.animals || []).filter(a => a.id !== action.payload)
    }
  }
})

export const getAnimalState = (state: AnimalsStoreState, id: string) => {
  return state.animals?.find(a => a.id === id)
}

export const { add, remove } = animalsSlice.actions
export default  animalsSlice.reducer
