import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/global-styles'
import { Background } from './components/Background'
import { Header } from './components/Header'
import { GridTwoColumn } from './components/GridTwoColumn'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Background>
      <Header />
      <GridTwoColumn />
    </Background>
  </React.StrictMode>,
)
