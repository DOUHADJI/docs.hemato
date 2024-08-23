import React, { FunctionComponent } from 'react'
import LayoutCpn from '../../components/layouts/layout'
import ProcessPrologue from '../../components/process/processPrologue'
import ProcessesSideBar from '../../components/sidebar/processes/ProcessesSidebar'


const Prologue : FunctionComponent = () => {
  return (
    <LayoutCpn navigation={<ProcessesSideBar />}>
      <ProcessPrologue />
    </LayoutCpn>
  )
}
export default Prologue;
