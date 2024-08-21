import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { Container } from "./styles/Shares";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import { GlobalCSS } from "./styles/GlobalCSS";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
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
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="home" element={<Home/>} />
          <Route path="logout" element={<Logout/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
