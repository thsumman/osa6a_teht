import React from 'react'
import { connect } from 'react-redux'
import { updateVote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notiReducer'
//import anecdoteService from '../services/anecdotes'

class AnecdoteList extends React.Component {
  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={ async () => {
                this.props.updateVote(anecdote)
                //console.log(votedAnec)
                //this.props.voting(anecdote.id)
                this.props.notify(`You voted '${anecdote.content}'`, 3)
                /*this.props.setNotification(`You voted "${anecdote.content}"`)
                setTimeout(() => {this.props.delNotification()}, 5000)*/
              }
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const anecdotesToShow = (anecdotes, filter) => {
  return anecdotes.filter(a => a.content.indexOf(filter) !== -1)
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const mapDispatchToProps = {
  updateVote,
  notify
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList