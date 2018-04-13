import React, { Component } from 'react'

import TranslationsTable from './TranslationsTable'

class Subito extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPosition: null,
      subtitleIds: 'abcdefghijklmn'.split('')
    }

    this.updatePosition = this.updatePosition.bind(this)
  }

  updatePosition (newPosition) {
    this.setState({
      currentPosition: newPosition
    })
  }

  render () {
    return (
      <div className='container'>
        <TranslationsTable
          subtitleIds={this.state.subtitleIds}
          currentPosition={this.state.currentPosition}
          updatePosition={this.updatePosition}
        />
      </div>
    )
  }
}

export default Subito
