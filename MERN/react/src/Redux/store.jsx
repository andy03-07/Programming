import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'
// import todoReducer from '../features/todos/todoSlice'
// import filtersReducer from '../features/filters/filtersSlice'
export const store = configureStore({
  reducer: {
    // todos:todoReducer,
    // filters:filtersReducer,

    counter: counterReducer,
  },
})
