import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const RootElement = document.getElementById("root")
if (RootElement == null) {
  throw new Error("Root container missing in index.html")
}


ReactDOM.createRoot(RootElement).render(
  <>
    <App />
  </>
)




