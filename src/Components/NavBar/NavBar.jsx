import CartWidget from "../CartWidget";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import brandLogo from "../../assets/logo_light_horizontal.svg";
import { Dropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#30343F" }}>
      <Navbar bg="dark" expand="md" className="navbar">
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100% !important",
          }}
        >
          <Navbar.Brand>
            <NavLink to={`/`} title="Go to the homepage">
              <img style={{ width: "75%" }} src={brandLogo} alt="" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Navbar.Collapse
              id="responsive-navbar-nav"
              color="secondary"
              className="desplegable"
            >
              <Nav className="me-auto">
                <ButtonGroup aria-label="Basic example" className="desplegable">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="dark"
                      style={{
                        backgroundColor: "inherit",
                        border: "none",
                        marginRight: "50px",
                      }}
                      id="dropdown-basic"
                    >
                      Shop
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="">
                      <Dropdown.Item>
                        <NavLink to={`category/63F5KQ32yWGUM7aVsEpO`}>
                          Star Wars
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink to={`category/KqE8AduIVGfVCVhbANdd`}>
                          Pokemon
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink to={`category/1L0OXTjqZ56F5oa8Vgil`}>
                          Harry Potter
                        </NavLink>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
              </Nav>
              <Nav>
                <CartWidget className="carrito" />
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <div></div>
    </div>
  );
};

export default NavBar;
