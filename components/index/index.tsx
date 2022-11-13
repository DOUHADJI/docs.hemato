import {
  FC,
  FunctionComponent,
  ReactComponentElement,
  ReactNode,
  useState,
} from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import NavbarCpn from '../navbar/navbar'

const IndexCpn: FunctionComponent<{
  children: ReactNode
}> = ({ children }) => {
  const [hidden, setHidden] = useState(false)

  const showSideBar = () => {
    setHidden(false)
  }
  return (
    <div className="bg-gradient-to-tr from-red-400 to-slate-900 dark:from-slate-800 dark:to-slate-900">
      <div>
        <NavbarCpn />
      </div>
      <div className="">
        <div className="relative flex">
          <div className=" w-full p-12"> {children} </div>
        </div>
      </div>
    </div>
  )
}
export default IndexCpn
