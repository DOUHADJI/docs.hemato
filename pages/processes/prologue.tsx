import { FunctionComponent } from 'react'
import LayoutCpn from '../../components/layouts/layout'
import ProcessCpn from '../../components/process/process'
import ProcessPrologue from '../../components/process/processPrologue'

import AnotherSide from '../../components/sidebar/processes/ProcessesSidebar'

const Prologue: FunctionComponent<{}> = ({}) => {
  return (
    <LayoutCpn navigation={<AnotherSide />}>
      <ProcessPrologue />
    </LayoutCpn>
  )
}
export default Prologue
