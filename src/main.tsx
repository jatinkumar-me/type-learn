import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import testSlice from './state/testSlice.ts'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    test: testSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
