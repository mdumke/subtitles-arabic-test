import React, { Component } from 'react'

import TranslationsTable from './TranslationsTable'
import { UP, DOWN } from '../constants'

class Subito extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPosition: null,
      subtitleIds: 'abcdefghijklmn'.split('')
    }

    this.updatePosition = this.updatePosition.bind(this)
    this.navigate = this.navigate.bind(this)
  }

  updatePosition (newPosition) {
    this.setState({
      currentPosition: newPosition
    })
  }

  navigate (direction) {
    if (direction === UP) {
      this.updatePosition(Math.max(this.state.currentPosition - 1, -1))
    }

    if (direction === DOWN) {
      this.updatePosition(Math.min(
        this.state.currentPosition + 1,
        this.state.subtitleIds.length))
    }
  }

  render () {
    return (
      <div className='container'>
        <TranslationsTable
          subtitleIds={this.state.subtitleIds}
          currentPosition={this.state.currentPosition}
          updatePosition={this.updatePosition}
          navigate={this.navigate}
        />
      </div>
    )
  }
}

export default Subito
