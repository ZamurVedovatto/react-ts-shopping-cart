import { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import styled from 'styled-components'
import { SectionWrapper } from './../assets/styles/index'
import { Container, Card, Form, FloatingLabel, Button} from 'react-bootstrap'


const FeedbackFormComp = styled.section`

`

export function FeedbackForm() {
  const [ value, setValue ] = useState(10); 
  const [ finalValue, setFinalValue ] = useState(null);

  return (
    <SectionWrapper>
      <FeedbackFormComp>
        <Container>
          <Card>
            <Card.Header>Zamur Borges Vedovatto - 17/07/2002 (14:30)</Card.Header>
            <Card.Body className="p-4">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>HTML</Form.Label>
                  <RangeSlider
                    value={value}
                    onChange={changeEvent => setValue(changeEvent.target.value)}
                    onAfterChange={e => setFinalValue(e.target.value)}
                    min={0}
                    max={10}
                    tooltipPlacement="top"
                    tooltip="on"
                    variant="secondary"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>CSS/SCSS</Form.Label>
                  <RangeSlider
                    value={value}
                    onChange={changeEvent => setValue(changeEvent.target.value)}
                    onAfterChange={e => setFinalValue(e.target.value)}
                    min={0}
                    max={10}
                    tooltipPlacement="top"
                    tooltip="on"
                    variant="secondary"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Accessibility Proficiency</Form.Label>
                  <RangeSlider
                    value={value}
                    onChange={changeEvent => setValue(changeEvent.target.value)}
                    onAfterChange={e => setFinalValue(e.target.value)}
                    min={0}
                    max={10}
                    tooltipPlacement="top"
                    tooltip="on"
                    variant="secondary"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        disabled
                        label="3 (disabled)"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </FeedbackFormComp>
    </SectionWrapper>
  )
  
}
