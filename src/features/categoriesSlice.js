
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const categoriesApi = createAsyncThunk("categories/fetchData", async () => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/categories`)
    return response.data
  } catch (error) {
    console.log(error)
  }
})

const categoriesSlice = createSlice({
  name: 'getCategoriesData',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categoriesApi.pending, (state) => {
      state.status = 'loading'
    }).addCase(categoriesApi.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload
    }).addCase(categoriesApi.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default categoriesSlice.reducer