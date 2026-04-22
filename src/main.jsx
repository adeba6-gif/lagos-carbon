import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PageProvider } from './context/PageContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </StrictMode>,
)
