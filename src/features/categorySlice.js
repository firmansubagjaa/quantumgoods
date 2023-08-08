import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const categoryApi = createAsyncThunk("category/fetchData", async (categorys) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/category/${categorys}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
})

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categoryApi.pending, (state) => {
      state.status = 'loading'
    }).addCase(categoryApi.fulfilled, (state, action) => {
      state.status = 'succeeded',
        state.data = action.payload
    }).addCase(categoryApi.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default categorySlice.reducer