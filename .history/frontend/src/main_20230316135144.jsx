import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
