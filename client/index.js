import { start, html, pull } from 'inu'

import app from './App'

const { views } = start(app)
const main = document.querySelector('.main')

pull(
  views(),
  pull.drain(function (view) {
    html.update(main, view)
  })
) 

