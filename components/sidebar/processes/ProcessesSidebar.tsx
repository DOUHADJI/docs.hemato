import { BiGrid, BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import { BsBoxArrowRight, BsBoxArrowLeft, BsDot, BsCaretRight } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { FunctionComponent, useContext, useEffect, useState } from 'react'
import MobileSideBar from '../mobileSidebar'
import DesktopSideBar from '../desktopSidebar'
import { fetchAllStories } from '../../api'
import MyDropdown from '../dropdown'
import axios from 'axios'
import { GET_STEPS } from '../../../shared/apiRoutes'
import { processesStepsContext } from '../../contexts/processesStepsContext'
import SideBarLinkCpn from '../sidebarLink'
import SideBarSubLink from '../sidebarSubLink'

const ProcessesSideBar: FunctionComponent = () => {
  const { steps, setSteps } = useContext(processesStepsContext)

  return (
    <>
    
      <SideBarLinkCpn
        title="Prologue"
        href="/procedures/prologue"
        icon={BsDot}
      />
      {steps?.map((step, index) => (
        <SideBarLinkCpn
          title={'Procédures ' + step?.name}
          slug={step?.slug}
          href={'procudures-' + step?.slug}
          icon={BsCaretRight}
          recordsCount={step?.processes_count}
          subLinks={step?.processes}
        />
      ))}
    </>
  )
}

export default ProcessesSideBar
