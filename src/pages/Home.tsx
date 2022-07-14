import { ListGroup, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { SectionWrapper } from './../assets/styles/index'

const HomeComp = styled.section`
  li {
    border-right: 0;
    border-left: 0;
    &:first-child {
      border-top: none;
    }
    &:last-child {
      border-bottom: none;
    }
    button {
      font-size: .8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`

const candData = [
  {
    name: "Zamur Borges Vedovatto",
    date: "14/07/2022",
    time: "15:30",
    active: true,
    feedback: false
  },
  {
    name: "Zamur Borges Vedovatto",
    date: "14/07/2022",
    time: "15:30",
    active: true,
    feedback: true
  },
  {
    name: "Zamur Borges Vedovatto",
    date: "14/07/2022",
    time: "15:30",
    active: false,
    feedback: false
  },
  {
    name: "Zamur Borges Vedovatto",
    date: "14/07/2022",
    time: "15:30",
    active: false,
    feedback: false
  },
  {
    name: "Zamur Borges Vedovatto",
    date: "14/07/2022",
    time: "15:30",
    active: false,
    feedback: false
  }
]

export function Home() {
  const [candidates, setCandidates] = useState(candData)

  return (
    <SectionWrapper>
      <HomeComp>
        <ListGroup as="ol">
          {
            candidates.map(cand => (
              <ListGroup.Item
                key={cand.name}
                as="li"
                className="d-flex justify-content-between align-items-start"
                disabled={!cand.active}
              >
                <div className="ms-2 me-auto">
                  <div>{cand.name}</div>
                  {cand.date} - {cand.time}
                </div>
                {
                  !cand.feedback ? (
                    <Button disabled={cand.feedback} to="/feedback-form" as={NavLink} >
                      Create Feedback
                    </Button>
                  ) : (
                    <Button disabled={cand.feedback} variant="secondary">
                      Feedback Sent
                    </Button>
                  )
                }
              </ListGroup.Item>
            ))
          }
        </ListGroup>

      </HomeComp>
    </SectionWrapper>
  )
}
