import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const newAnecdote = async (event) => {
    event.preventDefault()

    dispatch(createAnecdote(event.target.content.value))
    dispatch(setNotification('added anecdote: "' + event.target.content.value + '"', 5))

    event.target.content.value = ''
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name="content" /></div>
        <button type="submit">create</button>
      </form>
    </div>)
}

export default AnecdoteForm