import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filterText = useSelector(state => state.filter.text)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
    const anecdoteToVote = anecdotes.find(a => a.id === id)
    dispatch(setNotification('voted for anecdote: "' + anecdoteToVote.content + '"', 5))
  }

  return (
    <div>
      {anecdotes
        .filter(a => a.content.toUpperCase().includes(filterText.toUpperCase()))
        .sort((a, b) => a.votes > b.votes ? -1 : 1)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>

        )}</div>)
}

export default AnecdoteList