import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container } from './styles/Shares';
import { ThemeProvider } from 'styled-components';
import {GlobalCss} from './styles/GlobalCss';
import Home from './components/Home';
import Login from './components/Login';
import LoginContextProvider from "./components/store/LoginContextApi";
import { RouteGuard } from "./helpers/RouteGuard";

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
      <LoginContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={
              <RouteGuard>
                <Home />
              </RouteGuard>
            } />
          </Routes>
        </Router>
      </LoginContextProvider>
      </Container>
    </ThemeProvider>
    
  )
}

export default App
