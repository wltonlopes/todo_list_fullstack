import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

// import Cards from '../components/Cards';

export default function MainTodo() {
  const [ tarefas, setTarefas ] = useState([]);
  const { id } = useParams();

  useEffect(()=>{
    fetch(`http://localhost:3005/tarefas/usuario/${id}`)
    .then(response => response.json())
    .then(json => setTarefas(json));
  },[]);

console.log(id);
  return (
    <Container height="100hv">
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
              <div>
                <Button variant="warning" size="sm">Editar</Button>{' '}
                <Button variant="danger" size="sm">Deletar</Button>
              </div>
              <Card.Footer>
                <small className="text-muted">{trf.date}</small>
              </Card.Footer>
            </Card>
          )
        })
      }
    </Container>
  )
}
