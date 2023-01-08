import { BsBoxArrowRight, BsBoxArrowLeft } from 'react-icons/bs'
import { FunctionComponent, ReactNode, useEffect } from 'react'
import SideBarLinkCpn from './sidebarLink'
import MyDropdown from './dropdown'
import { useRouter } from 'next/router'
import { openSidebar } from '../const'

const MobileSideBar: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter()

  useEffect(() => {
    openSidebar
  }, [])

  return (
    <div className="bg-transparent z-50 mt-12 md:hidden">
      <span
        className=" text-white text-2xl top-0 left-4 hiddeButton hidden absolute"
        onClick={openSidebar}
      >
        <BsBoxArrowRight className="px-2 bg-gray-900/25 rounded-md mt-5 text-[3rem]" />
      </span>

      <div className="sidebar z-40 absolute  top-0 bottom-0 lg:left-0 p-2 w-[350px] overflow-y-auto text-center bg-gradient-to-b from-zinc-900 to-zinc-500/75 dark:from-slate-800 dark:to-slate-800/75">
        <span
          className="absolute text-white text-2xl top-5 right-5"
          onClick={openSidebar}
        >
          <BsBoxArrowLeft className=" px-2 bg-gray-900/25 rounded-md  text-[3rem]" />
        </span>

        <div className=" grid gap-12 mt-[100px] ">{children}</div>
      </div>
    </div>
  )
}
export default MobileSideBar
