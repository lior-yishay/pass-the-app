import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './exampleSlice'
import corruptionReducer from './corruptionSlice'

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    corruption: corruptionReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch