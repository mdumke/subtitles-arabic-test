/*
 * Interface to select the current language to be played back
 *
 */

import React from 'react'

const langNames = {
  arabisch: 'Arabisch',
  'leichte-sprache': 'Deutch (leicht)'
}

const style = {
  marginTop: '30px',
  marginBottom: '50px'
}

const LanguagePicker = props => (
  <div style={style}>
    <p><strong>Audio Version</strong></p>

    {
      ['arabisch', 'leichte-sprache'].map(lang => (
        <div key={lang} className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='inlineRadioOptions'
            defaultChecked={props.currentAudioVersion === lang}
            onClick={props.onLangPick}
            value={lang} />

          <label className='form-check-label'>
            { langNames[lang] }
          </label>
        </div>
      ))
    }
  </div>
)

export default LanguagePicker
