import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">Seeder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Myprofile</Nav.Link>
      <NavDropdown title="Locations" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Austin</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pflugerville</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Round Rock</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
