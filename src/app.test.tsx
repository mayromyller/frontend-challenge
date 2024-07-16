import { describe, it } from 'vitest'

import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { App } from './app'

import { WebSettingsProvider } from '@/context'
import { store } from '@/store'

describe('App test', () => {
  it('should render app application correctly', () => {
    render(
      <Provider store={store}>
        <WebSettingsProvider>
          <App />
        </WebSettingsProvider>
      </Provider>
    )
  })
})
