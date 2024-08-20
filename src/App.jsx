import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { Container } from "./styles/Shares";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import { GlobalCSS } from "./styles/GlobalCSS";
import Nav from "./components/Nav";
const theme = {
  colors: {
    primary: "#191919",
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Router>
        <Routes>
          <Route path="/" element={<Nav/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
