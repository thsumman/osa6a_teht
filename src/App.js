import React from 'react'
import Notification from './components/Notification'
import Filter from './components/Filter'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { connect } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
//import anecdoteService from './services/anecdotes'

class App extends React.Component {
  componentDidMount = () => {
    //console.log('didMount')
    //const anecdotes = await anecdoteService.getAll()
    this.props.initializeAnecdotes()
  }
  render() {
    //const anecdotes = this.props.store.getState().anectodes
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification />
        <Filter />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}

export default connect(
  null,
  { initializeAnecdotes }
)(App)