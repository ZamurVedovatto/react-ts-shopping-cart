import { SectionWrapper } from './../assets/styles/index'
import styled from 'styled-components'
import { Container, Form, Button} from 'react-bootstrap'

const FeedbackFormComp = styled.section`

`

export function FeedbackForm() {
  return (
    <SectionWrapper>
      <FeedbackFormComp>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Range</Form.Label>
              <Form.Range />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </FeedbackFormComp>
    </SectionWrapper>
  )
  
}
