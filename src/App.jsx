import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { Container } from "./styles/Shares";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
const theme = {
  colors: {
    primary: "aliceblue"
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
