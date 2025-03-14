import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts:[]
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setPosts } = postSlice.actions

export default postSlice.reducer