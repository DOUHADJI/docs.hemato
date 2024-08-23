import axios from 'axios'
import React, {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { GET_STEPS } from '../../shared/apiRoutes'

export const processesStepsContext = createContext(null)

export const ProcessesStepsContextProvider: FunctionComponent<{
  children: ReactNode
}> = ({ children }) => {
  const [steps, setSteps] = useState(null)
  const [loading, setLoading] = useState(true)
  const context = { steps, setSteps }
  const contextMemo = useMemo(() => context, [steps])

  const getSteps = async () => {
    const res = await axios.get(GET_STEPS)
    if (res?.status === 200) {
      console.log(res?.data)
      setSteps(res?.data?.steps)
    }
  }

  useEffect(() => {
    getSteps()
  }, [])

  return (
    <>
      <processesStepsContext.Provider value={contextMemo}>
        {children}
      </processesStepsContext.Provider>
    </>
  )
}
