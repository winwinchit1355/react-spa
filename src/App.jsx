import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { Container } from "./styles/Shares";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import { GlobalCSS } from "./styles/GlobalCSS";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginContextProvider from "./store/LoginContextApi";
import RouteGuard from "./helpers/RouteGuard";
import About from "./components/About";
const theme = {
  colors: {
    primary: "#191919",
    secondary: "#54C5F8",
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <LoginContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="home" element={
              <RouteGuard><Home/></RouteGuard>
            } />
            <Route path="about" element={
              <RouteGuard><About/></RouteGuard>
            } />
          </Routes>
        </Router>
      </LoginContextProvider>
    </ThemeProvider>
  )
}

export default App
