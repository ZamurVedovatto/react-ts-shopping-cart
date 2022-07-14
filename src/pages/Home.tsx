import { ListGroup, Button } from 'react-bootstrap'
import styled from 'styled-components'

const HomeComp = styled.section`
  max-width: 1040px;
  font-size: .8rem;
  li {
    button {
      font-size: .8rem;
    }
  }
`

export function Home() {
  return (
    <HomeComp className="mx-auto pt-5 pb-2">
      <ListGroup as="ol">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Lúcio Mauro Filho</div>
            14/07/2022 - 15:30h
          </div>
          <Button>
            Create Feedback
          </Button>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Lúcio Mauro Filho</div>
            14/07/2022 - 15:30h
          </div>
          <Button>
            Create Feedback
          </Button>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start disabled"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Lúcio Mauro Filho</div>
            14/07/2022 - 15:30h
          </div>
          <Button variant="secondary" disabled>
            Create Feedback
          </Button>
        </ListGroup.Item>
      </ListGroup>

    </HomeComp>
  )
}
