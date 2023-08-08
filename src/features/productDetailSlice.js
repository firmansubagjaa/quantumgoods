import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productDetailApi = createAsyncThunk('getById/fetchData', async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
    return response.data
  } catch (error) {
    console.log(Error)
  }
})

const productDetailSlice = createSlice({
  name: 'getById',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productDetailApi.pending, (state) => {
      state.status = 'loading'
    }).addCase(productDetailApi.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload
    }).addCase(productDetailApi.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default productDetailSlice.reducer