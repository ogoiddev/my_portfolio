import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserThemeContextProvider } from './context/UserThemeContext';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserThemeContextProvider>
      <App />
    </UserThemeContextProvider>
  </React.StrictMode>
)
