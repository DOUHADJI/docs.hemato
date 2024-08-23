import { FunctionComponent, ReactNode } from 'react'
import MyDropdown from './dropdown'
import SideBarLinkCpn from './sidebarLink'

const DesktopSideBar: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="desktopSideBar bg-gradient-to-b from-white/25 to-transparent py-12">
      <div className="w-full">
        <div className="grid gap-3 p-4 pt-12">{children}</div>
      </div>
    </div>
  )
}
export default DesktopSideBar
