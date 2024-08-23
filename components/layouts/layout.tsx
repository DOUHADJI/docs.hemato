import {
  FC,
  FunctionComponent,
  ReactComponentElement,
  ReactNode,
  useState,
} from 'react'
import NavbarCpn from '../navbar/navbar'
import SideBarCpn from '../sidebar/desktopSidebar'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { appTitle } from '../const'
import SideBar from '../sidebar/sidebar'
import { Button } from '@nextui-org/react'
import { BiSearch } from 'react-icons/bi'

const LayoutCpn: FunctionComponent<{
  navigation?: ReactNode
  children: ReactNode
}> = ({ children, navigation }) => {
  const [hidden, setHidden] = useState(false)

  const showSideBar = () => {
    setHidden(false)
  }
  return (
    <>
      <div className="flex items-center justify-end gap-4 py-4 px-8 bg-gray-100 shadow w-full z-30 h-[80px]">
        <input
          placeholder="Rechercher un élément"
          className="bg-white w-fit border border-gray-300 py-2 text-black px-2 focus:border-blue-500 focus:outline-none"
        />
        <Button isIconOnly>
          <BiSearch />
        </Button>
      </div>
      <div className="flex top-[70px] fixed right-0 left-0 bottom-0">
        <SideBar>{navigation}</SideBar>
        <div className="flex flex-col relative justify-center h-full overflow-y-hidden bg-[#f0eeee]  md:w-4/5">
          <div className="h-full overflow-y-auto z-30">
            <div className="grid py-8 mb-16 px-12 w-full h-fit">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default LayoutCpn
