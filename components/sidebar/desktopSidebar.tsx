import { Collapse, Text } from '@nextui-org/react'
import { FunctionComponent, useState, useEffect } from 'react'
import { fetchAllProcesses } from '../api'
import MyDropdown from './dropdown'
import SideBarLinkCpn from './sidebarLink'

const DesktopSideBar: FunctionComponent<{
  preAnalyticLinks
  analyticLinks
  postAnalyticLinks
}> = ({ preAnalyticLinks, analyticLinks, postAnalyticLinks }) => {
  return (
    <div className="desktopSideBar bg-gradient-to-b from-white/25 to-transparent py-12">
      <div className="w-full">
        <div className="grid gap-3 p-4 pt-12">
        <MyDropdown id='preAnalyticProcesses' title='procédures pré-analytiques' links={preAnalyticLinks} />
        <MyDropdown id='analyticProcesses' title='procédures analytiques' links={analyticLinks} />
        <MyDropdown id='postAnalyticProcesses' title='procédures post-analytiques' links={postAnalyticLinks} />
        </div>
      </div>
    </div>
  )
}
export default DesktopSideBar
