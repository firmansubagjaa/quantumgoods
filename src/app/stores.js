import { configureStore } from '@reduxjs/toolkit'
import categoriesReducers from '../features/categoriesSlice'
import categoryReducers from '../features/categorySlice'
import productDetailReducers from '../features/productDetailSlice'

const store = configureStore({
  reducer: {
    category: categoriesReducers,
    get: categoryReducers,
    getById: productDetailReducers
  }
})

export default store