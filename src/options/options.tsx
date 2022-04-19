import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import './options.css'

const test = <p>Hello options</p>

const rootElem = document.createElement('div')
document.body.appendChild(rootElem)
const root = ReactDOMClient.createRoot(rootElem)

root.render(test)
