import React, { Component } from 'react'

class TranslationsTable extends Component {
  constructor (props) {
    super(props)

    this.locales = ['de', 'de-leicht', 'ar']

    this.state = {
      translations: {
        'de-leicht': {},
        de: {},
        ar: {}
      }
    }

    this.handleRowClick = this.handleRowClick.bind(this)
  }

  componentDidMount () {
    this.setState({
      translations: require('../data/translations.json')
    })
  }

  handleRowClick(e) {
    const newPositon = Number(e.target.getAttribute('value'))
    this.props.updatePosition(newPositon)
  }

  renderCell (id, locale, rowIndex) {
    const props = {
      key: `${locale}-${id}`,
      value: rowIndex
    }

    if (locale === 'ar') {
      props.dir = 'rtl'
      props.className = 'text-right'
    }

    return (
      <td {...props}>
        {this.state.translations[locale][id]}
      </td>
    )
  }

  renderRows () {
    return this.props.subtitleIds.map((subtitleId, index) => {
      const highlight = index === this.props.currentPosition

      return (
        <tr
          key={subtitleId}
          className={`${highlight ? 'alert-info' : ''}`}
          onClick={this.handleRowClick}
          >
          {
            this.locales.map(locale =>
              this.renderCell(subtitleId, locale, index))
          }
        </tr>
      )
    })
  }

  render () {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th className='text-center' style={{width: '33%'}}>Deutsch (original)</th>
            <th className='text-center' style={{width: '33%'}}>Deutsch (leicht)</th>
            <th className='text-center'>Arabisch</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

export default TranslationsTable
