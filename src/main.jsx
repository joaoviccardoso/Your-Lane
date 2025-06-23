import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Banner from './component/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Banner/>
  </StrictMode>,
)
