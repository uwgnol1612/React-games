import ReactDOM from 'react-dom';
import Game from './components/game'
import React from 'react'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Game />, document.getElementById('main'))
})