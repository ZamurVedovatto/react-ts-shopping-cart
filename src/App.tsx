import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Archive } from "./pages/Archive"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { CandidateProvider } from "./context/CandidateContext"

function App() {
  return (
    <CandidateProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </CandidateProvider>
  )
}

export default App
