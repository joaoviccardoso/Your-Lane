import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Banner from './component/banner'
import Formulario from './component/formulario/formulario'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Banner/>
    <Formulario/>
  </StrictMode>,
)
