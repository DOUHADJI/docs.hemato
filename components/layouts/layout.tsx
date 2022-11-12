import {
  FC,
  FunctionComponent,
  ReactComponentElement,
  ReactNode,
  useState,
} from 'react'
import NavbarCpn from '../navbar/navbar'
import SideBarCpn from '../sidebar/sidebar'
import { AiOutlineArrowRight } from 'react-icons/ai'

const LayoutCpn: FunctionComponent<{
  navigation: ReactNode
  children: ReactNode
}> = ({ children, navigation }) => {
  const [hidden, setHidden] = useState(false)

  const showSideBar = () => {
    setHidden(false)
  }
  return (
    <div className=" min-w-screen bg-gradient-to-tr from-red-400 to-slate-900 dark:from-slate-800 dark:to-slate-900">
      <div>
        <NavbarCpn />
      </div>
      <div className="">
        <div className="p-3 md:hidden" hidden={!hidden}>
          <button onClick={showSideBar} className="rounded bg-gray-300 p-2">
            <span className="flex items-center justify-around font-bold gap-3 pl-3">
              <span>Afficher le menu </span>
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        <div className="relative flex w-screen">
          <div className="">{navigation}</div>
          <div className=" w-full p-12"> {children} </div>
        </div>
      </div>
    </div>
  )
}
export default LayoutCpn
