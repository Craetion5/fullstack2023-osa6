import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: 'test',
  enabled: false
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage(state, action) {
      return ({
        message: action.payload,
        enabled: state.enabled
      })
    },
    setEnabled(state, action) {
      return ({
        message: state.message,
        enabled: action.payload
      })
    }
  },
})

export const { setMessage, setEnabled } = notificationSlice.actions

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch(setMessage(content))
    dispatch(setEnabled(true))
    setTimeout(() => {
      dispatch(setEnabled(false))
    }, time * 1000)
  }
}

export default notificationSlice.reducer