import React from 'react'
import { connect } from 'react-redux'
import { filteroi } from '../reducers/filterReducer'


class Filter extends React.Component {
  handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    //const allAnecdotes = this.props.anecdotes
    //const filteredAnecdotes = allAnecdotes.filter(a => a.content.indexOf(event.target.value) !== -1)
    this.props.filteroi(event.target.value)
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  filteroi
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter