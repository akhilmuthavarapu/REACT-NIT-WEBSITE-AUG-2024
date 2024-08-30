import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import "./css/NitNav.css"
import "./css/home.css"
import "./css/login.css"
import "./css/prd.css"
import "./css/contact.css"



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
