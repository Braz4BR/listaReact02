import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListaOrdenada from './components/ListaOrdenada'
import OlaMundo from './components/Ola'
import Paragrafo from './components/Paragrafo'
import Image from './components/Imagem'
import Botaozinho from './components/Botao'
import Link from './components/Linker'
import App from './App.jsx'
import './index.css'
import Title from './components/Titulos.jsx'
import Cond from './components/Condicional.jsx'
import DivBela from './components/DivEstilo.jsx'
import Music from './components/DivPara.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <OlaMundo/>
    <Paragrafo/>
    <ListaOrdenada/>
    <Image/><br/>
    <Botaozinho/><br/>
    <Link/>
    <Title/>
    <Cond desc={true} />
    <DivBela/>
    <Music/>
  </StrictMode>,
)
