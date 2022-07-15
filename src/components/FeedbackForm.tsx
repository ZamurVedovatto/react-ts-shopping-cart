import { useState } from 'react';
import styled from 'styled-components'
import { Container, Card, Form, FloatingLabel, Button} from 'react-bootstrap'
import { useCandidate } from "../context/CandidateContext"
import formFields from "./../data/form-fe.json"

const FeedbackFormComp = styled.section`
`

function RadioField ({ max }) {
  return (
    <Form.Group className="mb-5" controlId="formBasicCheckbox">
      {[...Array(max)].map((x, i) =>
        <Form.Check
          inline
          label={i+1}
          name={`group${i+1}`}
          type="radio"
        />
      )}
    </Form.Group>
  )
}

export function FeedbackForm() {
  const { selectedCandidate, onSetSelectedCandidate } = useCandidate()
  const [ value, setValue ] = useState(10); 
  const [ finalValue, setFinalValue ] = useState(null);

  return (
    <FeedbackFormComp>
      <Container>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <span className="fw-bold text-uppercase">{selectedCandidate.name} </span>
            <span>{selectedCandidate.date} - {selectedCandidate.time}</span>
          </Card.Header>
          <Card.Body className="p-4">
            <Form>
              {
                formFields?.map((field) => (
                  <Form.Group key={field.title} className="mb-5" controlId="formBasicEmail">
                    <Form.Label className="pe-3">{field.title}</Form.Label>
                    <RadioField max={field.max}></RadioField>
                  </Form.Group>
                ))
              }

              <Form.Group className="mb-5" controlId="formBasicPassword">
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="d-flex justify-content-end g-2" controlId="formBasicPassword">
                <Button className="m-1" variant="outline-secondary" onClick={() => onSetSelectedCandidate(null)}>Cancel</Button>
                <Button className="m-1" variant="primary" type="submit">
                  Submit
                </Button>
              
              </Form.Group>

            </Form>
          </Card.Body>
        </Card>
      </Container>
    </FeedbackFormComp>
  )
  
}
