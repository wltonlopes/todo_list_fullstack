import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import{ Container, Row, Col } from 'react-bootstrap';

export default function Login() {

  const [ name, setName ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ user, setUser ] = useState("");

  let navigate = useNavigate();

  useEffect(()=>{
    fetch(`http://localhost:3005/usuario/name/${name}${password}`)
    .then(response => response.json())
    .then(json => setUser(json));
    
    console.log(user)
  },[ name, password ]);

  const handleClick = () => {
    const usuario = user[0]
    navigate(`../todo/${usuario.id}`, { replace: true });
  };

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
                  <Form.Control 
                    type="text" 
                    placeholder="Digite seu nome de usuario"  
                    data-testid="name" 
                    onChange={ e => setName(e.target.value) } 
                    required="required" 
                  />
                  <Form.Text className="text-muted">
                  Coloque seu nome aqui para 
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password"  
                    data-testid="pass" 
                    onChange={ e => setPassword(e.target.value) } 
                    required="required" 
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Salvar senha" />
                </Form.Group>
                <Button variant="success" disabled={ name|password ===''| password.length !== 5 ? true : false } onClick={ handleClick }>
                  Acessar
                </Button>
              </Form>
              </Col>
              <Col></Col>
            </Row>
          </Container>
          
  )
}
