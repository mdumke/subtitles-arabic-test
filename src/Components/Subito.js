import React, { Component } from 'react'

import TranslationsTable from './TranslationsTable'

class Subito extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPosition: null,
      subtitleIds: 'abcdefghijkl'.split('')
    }
  }

  render () {
    return (
      <div className='container'>
        <TranslationsTable
          subtitleIds={this.state.subtitleIds}
          currentPosition={this.state.currentPosition}
        />
      </div>
    )
  }
}

export default Subito
