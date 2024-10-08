import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import './index.css'
import { WebSettingsProvider } from '@/context'
import { Provider } from 'react-redux'
import { store } from '@/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <WebSettingsProvider>
        <App />
      </WebSettingsProvider>
    </Provider>
  </React.StrictMode>
)
