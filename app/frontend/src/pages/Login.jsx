import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import{ Container, Row, Col } from 'react-bootstrap';

export default function Login() {

  const [ name, setName ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
        <Container>
            <Row>
              <Col></Col>
              <Col>
                <Form onChange={ console.log(name, password)}>
                  <br/>
                  <br/>
                  <br/>
                <h1>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >Nome</Form.Label>
                  <Form.Control type="text" placeholder="Digite seu nome de usuario"  data-testid="name" onChange={ e => setName(e.target.value) } required/>
                  <Form.Text className="text-muted">
                  Coloque seu nome aqui para 
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"  data-testid="pass" onChange={ e => setPassword(e.target.value) } required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Salvar senha" />
                </Form.Group>
                <Link to="/todo">
                <Button variant="success" name="todo" >Success</Button>{' '}
                </Link>
              </Form>
              </Col>
              <Col></Col>
            </Row>
          </Container>
          
  )
}
