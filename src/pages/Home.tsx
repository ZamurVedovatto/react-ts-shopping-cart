import { ListGroup, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { SectionWrapper } from './../assets/styles/index'
import { FeedbackForm } from './../components/FeedbackForm'
import { useCandidate } from "../context/CandidateContext"
import candData from "./../data/candidatesData.json"

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

export function Home() {
  const { selectedCandidate, onSetSelectedCandidate } = useCandidate()
  const [candidates, setCandidates] = useState(candData)

  useEffect(() => {
    onSetSelectedCandidate(null)
  }, [])
  
  return (
    <SectionWrapper>
      <HomeComp>
        {
          (selectedCandidate === null) ? (
            <ListGroup as="ol">
              {
                candidates.map(cand => (
                  cand.active && !cand.feedback && (
                    <ListGroup.Item
                      action
                      key={cand.name}
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div>{cand.name}</div>
                        {cand.date} - {cand.time}
                      </div>
                      <Button onClick={() => onSetSelectedCandidate(cand)}>
                        Create Feedback
                      </Button>
                    </ListGroup.Item>

                  )
                ))
              }
            </ListGroup>
          ) : (
            <FeedbackForm/>
          )
        }
      </HomeComp>
    </SectionWrapper>
  )
}
