import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import './popup.css'

function Popup() {
  const handleClick = () => {
    chrome.tabs.create({ url: 'home.html', active: true })
  }

  return (
    <div>
      <p>Hello world</p>
      <button onClick={handleClick}>click to open</button>
    </div>
  )
}

const rootElem = document.createElement('div')
document.body.appendChild(rootElem)
const root = ReactDOMClient.createRoot(rootElem)

root.render(
  <div>
    <Popup />
  </div>
)
