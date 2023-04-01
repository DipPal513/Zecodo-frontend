import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../Data/logo-white.png";
import './NavBar.css';
function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid className="py-3 ">
        <Navbar.Brand href="/" className="">
          <img className="" style={{ width: "100px" }} src={Logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Categories" id="navbarScrollingDropdown" className="mt-2 me-2">
              <NavDropdown.Item href="#action3">
                Girls and Women
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Health and Beauty
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">Home & LifeStyle</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Sports and Outdoors</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Automotive and Motorbike</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Electronic Device</NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="nav-input"
              aria-label="Search"
            />
            <Button variant="danger" className="nav-btn me-lg-4">Search</Button>
          </Form>
            
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>

            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
            <div className="user d-flex align-center ms-md-5">
              <div className="avatar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2q10u-nlTj1B5tFCUlf2GVQ7ZIT3OvUJf_lB9-6hZrDlaCXzzJqWfRQ1YWLj4JLMDNk&usqp=CAU" className="" alt="" style={{width:'40px'}}/>
              </div>
              <div className="desc">
                <div className="">Hey,</div>
                <div className="">Jhon Doe</div>
              </div>
            </div>
            <AiOutlineShoppingCart className="cart-icon"/>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
