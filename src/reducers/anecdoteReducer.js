import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  if (action.type==='VOTE') {
    const old = state.filter(a => a.id !==action.data.id)
    const voted = state.find(a => a.id === action.data.id)
    return [...old, { ...voted, votes: voted.votes+1 } ]
  }
  if (action.type === 'CREATE') {

    return [...state, { content: action.data.content, id: action.data.id, votes:0 }]
  }
  if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }

  return state
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createNew = (content) => {
  return async (dispatch) => {
    const newAnec = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnec
    })
  }
}

export const updateVote = (anec) => {
  return async (dispatch) => {
    const changedAnec = { ...anec, votes: anec.votes + 1 }
    await anecdoteService.update(anec.id,changedAnec)
    dispatch({
      type: 'VOTE',
      data: changedAnec
    })
  }
}


export default reducer