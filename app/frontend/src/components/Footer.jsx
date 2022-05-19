import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar'

export default function Footer() {
  return (
    <Navbar expand="lg" variant="light" bg="success">
    <Container>
      <Navbar.Brand href="footer">TodoList Ebytr</Navbar.Brand>
    </Container>
  </Navbar>
  )
}
