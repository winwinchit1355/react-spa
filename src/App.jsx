import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container } from './styles/Shares';
import { ThemeProvider } from 'styled-components';
import {GlobalCss} from './styles/GlobalCss';
import Nav from './components/Nav';

const theme = {
  colors:{
    primary:"palegreen",
  }
}

function App() {

  return (
    <ThemeProvider theme={theme} >
      <GlobalCss />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Nav />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
    
  )
}

export default App
