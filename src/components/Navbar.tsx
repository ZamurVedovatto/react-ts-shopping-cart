import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import styled from "styled-components";
import { useShoppingCart } from "../context/ShoppingCartContext"


const NavbarComp = styled.nav`
  .navbarbs {
    background-color: #3A3D3F;
  }
  .tabs-area {
    border-bottom: 1px solid #dee2e6;
    background-color: #F9F9F9;
    .nav {
      max-width: 1040px;
      border: none;
    }
  }
`

export function Navbar() {
  return (
    <NavbarComp>
      <NavbarBs sticky="top" className="navbarbs shadow-sm">
        <Container>
          <Nav className="me-auto">
            <Nav.Link className="text-light" to="/" as={NavLink}>
              Assessment Feedback Tool
            </Nav.Link>
          </Nav>
          <Button>
            ZV
          </Button>
        </Container>
      </NavbarBs>
      <div className="tabs-area pt-5">
        <Nav className="mx-auto" variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link className="text-dark" as={NavLink} to="/">Interviews</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-dark" as={NavLink} to="/archive">Archive</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </NavbarComp>
  )
}
