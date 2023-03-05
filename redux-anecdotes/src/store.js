import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'

const storeTool = configureStore({
    reducer: {
        anecdotes: reducer,
        filter: filterReducer,
        notification: notificationReducer
    }
})

/*
anecdoteService.getAll().then(anecdotes =>
    storeTool.dispatch(setAnecdotes(anecdotes))
)
*/

export default storeTool