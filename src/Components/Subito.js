import React, { Component } from 'react'

import TranslationsTable from './TranslationsTable'
import AudioPlayer from './AudioPlayer'
import { UP, DOWN } from '../constants'

class Subito extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPosition: null,
      subtitleIds: '1,2,3,4,5,6,7,8,9,10,11,12,13,14'.split(',')
    }

    this.updatePosition = this.updatePosition.bind(this)
    this.navigate = this.navigate.bind(this)
  }

  playAudio () {
    const id = this.state.subtitleIds[this.state.currentPosition]

    this.refs.audioPlayer.play(id)
  }

  updatePosition (newPosition) {
    this.setState({
      currentPosition: newPosition
    }, this.playAudio)
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
        <AudioPlayer ref='audioPlayer'/>
      </div>
    )
  }
}

export default Subito
