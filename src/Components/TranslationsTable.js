import React, { Component } from 'react'

class TranslationsTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      translations: {
        de: {},
        'de-leicht': {},
        ar: {}
      }
    }
  }

  componentDidMount () {
    this.setState({
      translations: require('../data/translations.json')
    })
  }

  render () {
    const renderRows = () => {
      return this.props.subtitleIds.map(id => {
        return (
          <tr key={id}>
            <td>{this.state.translations['de'][id]}</td>
            <td>{this.state.translations['de-leicht'][id]}</td>
            <td dir='rtl'>{this.state.translations['ar'][id]}</td>
          </tr>
        )
      })
    }

    return (
      <table className='table'>
        <thead>
          <tr>
            <th style={{width: '33%'}}>Deutsch (original)</th>
            <th style={{width: '33%'}}>Deutsch (leicht)</th>
            <th>Arabisch</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    )
  }
}

export default TranslationsTable
