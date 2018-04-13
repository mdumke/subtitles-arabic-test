/* globals XMLHttpRequest, localStorage, URL, Audio */

import React, { Component } from 'react'

class AudioPlayer extends Component {
  constructor (props) {
    super(props)

    this.audioLookup = {}
    this.currentAudio = null
    this.filenames = '1,2,3,4,5,6,7,8,9,10,11,12,13,14'.split(',')
  }

  componentDidMount () {
    this.tracks = this.fetchAudioFiles()
  }

  fetchAudioFiles () {
    this.filenames.map(filename => {
      return this.fetchAudioFile(`./audio/${filename}.m4a`)
        .then(blob => {
          if (blob) return new Audio(URL.createObjectURL(blob))
        })
        .then(audio => {
          return this.audioLookup[filename] = audio
        })
      })
  }

  play (subtitleId) {
    const audio = this.audioLookup[subtitleId]

    if (!audio) return

    if (this.currentAudio) this.currentAudio.pause()

    this.currentAudio = audio
    this.currentAudio.currentTime = 0
    this.currentAudio.play()
  }

  fetchAudioFile (filename) {
    const xhr = new XMLHttpRequest()

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200 && xhr.response.type.match(/^audio/)) {
            resolve(xhr.response)
          } else {
            resolve(null)
          }
        }
      }

      xhr.responseType = 'blob'
      xhr.open('GET', filename, true)
      xhr.send()
    })
  }

  render () {
    return <div></div>
  }
}

export default AudioPlayer
