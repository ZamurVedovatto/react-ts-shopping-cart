import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Archive } from "./pages/Archive"
import { FeedbackForm } from "./pages/FeedbackForm"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/feedback-form" element={<FeedbackForm />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
