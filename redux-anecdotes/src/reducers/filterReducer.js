import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterText(state, action) {
      return ({
        text: action.payload
      })
    }
  },
})

export const { setFilterText } = filterSlice.actions
export default filterSlice.reducer