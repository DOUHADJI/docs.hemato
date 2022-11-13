import { FunctionComponent } from 'react'
import LayoutCpn from '../../components/layouts/layout'
import ProcessCpn from '../../components/process/process'
import PrologueCpn from '../../components/prologue'
import AnotherSide from '../../components/sidebar/processes/ProcessesSidebar'

const Prologue: FunctionComponent<{}> = ({}) => {
  return (
    <LayoutCpn navigation={<AnotherSide />}>
      <PrologueCpn />
    </LayoutCpn>
  )
}
export default Prologue
