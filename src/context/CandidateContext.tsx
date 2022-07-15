import { createContext, ReactNode, useContext, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

type CandidateProviderProps = {
  children: ReactNode
}

type CandidateType = {
  name: string
  date: string
  time: string
  active: boolean
  feedback: boolean
}


type CartItem = {
  id: number
  quantity: number
}

type CandidateContext = {
  openCart: () => void
  closeCart: () => void

  selectedCandidate: CandidateType | null
  onSetSelectedCandidate: (selected: CandidateType| null) => void
}

const CandidateContext = createContext({} as CandidateContext)

export function useCandidate() {
  return useContext(CandidateContext)
}

export function CandidateProvider({ children }: CandidateProviderProps) {
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)


  function onSetSelectedCandidate(selected: any) {
    selected ? setSelectedCandidate(selected) : setSelectedCandidate(null)
  }

  return (
    <CandidateContext.Provider
      value={{
        openCart,
        closeCart,
        selectedCandidate,
        onSetSelectedCandidate
      }}
    >
      {children}
    </CandidateContext.Provider>
  )
}
