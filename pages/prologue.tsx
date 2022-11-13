import { FunctionComponent } from 'react'
import { fetchOneProcess } from '../components/api'
import LayoutCpn from '../components/layouts/layout'
import ProcessCpn from '../components/process/process'
import PrologueCpn from '../components/prologue'
import AnotherSide from '../components/sidebar/sidebar'

const Prologue: FunctionComponent<{}> = ({}) => {
  return (
    <LayoutCpn navigation={<AnotherSide />}>
      <PrologueCpn />
    </LayoutCpn>
  )
}
export default Prologue
