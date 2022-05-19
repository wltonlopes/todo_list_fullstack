import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

// import Cards from '../components/Cards';

export default function MainTodo() {
  const [ tarefas, setTarefas ] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3005/tarefas/usuario/2')
    .then(response => response.json())
    .then(json => setTarefas(json));
  },[]);

console.log(tarefas);
  return (
    <Container height="100hv">
    <CardGroup>
      {
        tarefas === []? <p>carregando....</p>
        : tarefas.map((trf) => {
          return(
            <Card key={trf.id}>
              <Card.Body>
                <Card.Title>{trf.titulo}</Card.Title>
                <Card.Text>
                  {trf.tarefa}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{trf.date}</small>
              </Card.Footer>
            </Card>
          )
        })
      }
    </CardGroup>
    </Container>
  )
}
